import { useContext, useEffect, useState } from 'react';
import { apiCall } from '../../../api';
import SingleSmallPost from '../../../components/PostComponent/singleSmallPost';
import { UserContext } from '../../../contexts/UserContext';
import UserLayout from '../../../layouts/UserLayout';
import styles from './Dashboard.module.css';

const Dashboard = () => {
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
    <UserLayout>
      <div className="content">
        <h1 className="heading">Dashboard</h1>
        <div className={styles.dashboard}>
          <h1 className="heading">Timeline</h1>

          {posts?.map((post) => {
            return <SingleSmallPost post={post} user={user} />;
          })}
        </div>
      </div>
    </UserLayout>
  );
};

export default Dashboard;
