import { Fragment, useEffect, useState } from 'react';
import styles from './List.module.css';
import { Link } from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { apiCall } from '../../api';
import DeletePopups from '../popups/deletePopups';
import AdminLayout from '../../layouts/AdminLayout';

const List = ({ model, url, singlePageUrl, data1, data2, heading }) => {
  const [deleteDetails, setDeleteDetails] = useState({});
  const [showDelPopup, setShowDelPopup] = useState(false);
  const [lists, setLists] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getLists = async () => {
      const data = await apiCall('get', url);

      return setLists(data.data.data);
    };

    getLists();
  }, []);

  const deleteData = async (type, id, b, c) => {
    setDeleteDetails({ type, id, b, c });
    setShowDelPopup(true);
  };

  const goToSinglePage = (pageId) => {
    router.push(`/${singlePageUrl}/${pageId}`);
  };

  return (
    <Fragment>
      <Head>
        <title>{heading}</title>
      </Head>
      {showDelPopup ? (
        <DeletePopups
          listState={lists}
          setListState={setLists}
          url={url}
          showDelPopup={showDelPopup}
          setShowDelPopup={setShowDelPopup}
          type={deleteDetails.type}
          id={deleteDetails.id}
          b={deleteDetails.b}
          c={deleteDetails.c}
        />
      ) : (
        ''
      )}

      <div className="content">
        <div className={styles.lists}>
          <h1 className="heading">{heading}</h1>
          {lists?.map((list, index) => {
            return (
              <div className={styles.list} key={list._id}>
                <p className={styles.listWrapper}>
                  <span className={styles.left}>
                    <input type="checkbox" />
                  </span>
                  <span className={styles.left}>{index + 1}</span>
                  {/* <span className={styles.show1}><span className={styles.name}>ID:</span><span className={styles.value}>{list._id}</span></span><br /> */}
                  <span className={styles.show1}>
                    <span className={styles.name}>{data1}:</span>
                    <span className={styles.value}>{list[data1]}</span>
                  </span>
                  <span className={styles.show2}>
                    <span className={styles.name}>{data2}:</span>
                    <span className={styles.value}>{list[data2]}</span>
                  </span>

                  <span className={styles.right}>
                    <span
                      className="edit-btn cursor-pointer"
                      onClick={() => goToSinglePage(list._id)}
                    >
                      Edit
                    </span>

                    <span
                      className="delete-btn cursor-pointer"
                      onClick={() =>
                        deleteData(model, list._id, list.name, list.email)
                      }
                    >
                      Delete
                    </span>
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

// export const getServerSideProps = async context =>{

//     const response = await axios({
//         method: 'get',
//         url: 'http://localhost:8082/api/v1/users',
//         headers: { cookie: context.req.headers.cookie }
//     })

//     return {props:{users: response.data.data.data}}

// }

export default List;
