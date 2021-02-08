import Axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import CheckNamePopups from '../popups/checkNamePopup';
import styles from './DragAndDropUpload.module.css';

const DragAndDropUpload = (props) => {
  const [checkDetails, setCheckDetails] = useState({});
  const [showCheckNamePopup, setShowCheckNamePopup] = useState(false);
  const { data, dispatch } = props;

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch({ type: 'SET_DROP_DEPTH', dropDepth: data.dropDepth + 1 });
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch({ type: 'SET_DROP_DEPTH', dropDepth: data.dropDepth - 1 });
    if (data.dropDepth > 0) return;
    dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: false });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();

    e.dataTransfer.dropEffect = 'copy';
    dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: true });
  };

  const handleDrop = async (e) => {
    try {
      e.preventDefault();
      e.stopPropagation();
      const fileInput = document.getElementById('fileInput');
      let files = e.dataTransfer.files;

      if (files.length !== 1) {
        console.log('wrong');
        return dispatch({
          type: 'SET_ERROR',
          ERROR: 'Too many files. Upload one zip file',
        });
      }

      if (files && files.length > 0) {
        dispatch({ type: 'SET_ERROR', ERROR: 'File uploading' });
        dispatch({ type: 'SET_DROP_DEPTH', dropDepth: 0 });
        dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: false });

        const formData = new FormData();
        formData.append('zippedTheme', files[0]);
        const { data } = await Axios.post('/api/v1/uploads/', formData, {
          onUploadProgress: (progressEvent) => {
            const uploadPercentage = Math.floor(
              (progressEvent.loaded / progressEvent.total) * 100
            );
            dispatch({
              type: 'SET_ERROR',
              ERROR: `File uploading ${uploadPercentage}%`,
            });
          },
        });

        dispatch({
          type: 'SET_ERROR',
          ERROR: `Your theme is uploaded`,
        });
        console.log(data.data.data);
        return setCheckDetails(data.data.data);
      }
    } catch (err) {
      if (
        err.response.data.status === 'fail' ||
        err.response.data.status === 'error'
      ) {
        return dispatch({
          type: 'SET_ERROR',
          ERROR: err.response.data.message,
        });
      } else {
        return dispatch({
          type: 'SET_ERROR',
          ERROR: `Wrong file type`,
        });
      }
    }
  };

  useEffect(() => {
    if (checkDetails?.name) setShowCheckNamePopup(true);
  }, [checkDetails]);
  return (
    <Fragment>
      {showCheckNamePopup && (
        <CheckNamePopups
          showCheckNamePopup={showCheckNamePopup}
          setShowCheckNamePopup={setShowCheckNamePopup}
          name={checkDetails?.name}
          id={checkDetails?._id}
          url="uploads"
        />
      )}
      <div
        className={
          data.inDropZone
            ? `${styles.dragDropZone} ${styles.insideDragArea}`
            : styles.dragDropZone
        }
        onDrop={(e) => handleDrop(e)}
        onDragOver={(e) => handleDragOver(e)}
        onDragEnter={(e) => handleDragEnter(e)}
        onDragLeave={(e) => handleDragLeave(e)}
      >
        <p>Drag files here to upload</p>
      </div>
    </Fragment>
  );
};

export default DragAndDropUpload;
