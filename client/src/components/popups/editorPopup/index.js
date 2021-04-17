import { Fragment } from 'react';
import styles from './EditorPopup.module.css';
const EditorPopup = ({ editorLoader, content }) => {
  return (
    //set loader
    editorLoader ? (
      <div id={styles.popupEditor}>{content}</div>
    ) : (
      <Fragment></Fragment>
    )
  );
};

export default EditorPopup;
