import { Fragment, useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import AdminLayout from '../../../layouts/AdminLayout';
import styles from './AdminDashboard.module.css';
import Head from 'next/head';
import { apiCall } from '../../../api';
import SingleSmallPost from '../../../components/PostComponent/singleSmallPost';

const AdminDashboard = () => {
  const [user, setUser] = useContext(UserContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (user) {
      const getPosts = async () => {
        const allposts = await apiCall('get', 'posts', 'Get all post');

        console.log(allposts.data.data);
        setPosts(allposts.data.data);
      };
      getPosts();
    }
  }, [user]);

  return (
    <AdminLayout>
      <Head>
        <title>Dashboard - Admin</title>
      </Head>
      <div className="content">
        <div className={styles.dashboard}>
          <h1 className="heading">Timeline</h1>

          {posts?.map((post) => {
            return <SingleSmallPost post={post} />;
          })}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
