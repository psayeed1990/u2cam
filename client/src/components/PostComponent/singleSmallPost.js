import styles from './SingleSmallPost.module.css';
import moment from 'moment';
import Reacts from './reacts';
import { useEffect, useState } from 'react';

const SingleSmallPost = ({ post }) => {
  const [reactCount, setReactCount] = useState(0);
  const showReactBtns = (e) => {
    const reacts = e.currentTarget.firstChild;
    reacts.style.display = 'block';
  };

  useEffect(() => {
    setReactCount(post.reactcount);
  }, [post]);

  const hideReactBtns = (e) => {
    const reacts = e.currentTarget.firstChild;
    reacts.style.display = 'none';
  };

  return (
    <div className={styles.post}>
      <div className={styles.postTop}>
        <p className={styles.name}>
          <b>
            {post?.user?.firstname} {post?.user?.lastname}
          </b>
        </p>

        <p className={styles.privacy}>{post?.privacy}</p>
        <p className={styles.text}>{post?.text}</p>
        <p className={styles.time}>{moment(post.createdAt).fromNow()}</p>
      </div>

      <p className={styles.postBottom}>
        <span
          className={`${styles.reacts} reacts`}
          onMouseEnter={showReactBtns}
          onMouseLeave={hideReactBtns}
        >
          <div className={`${styles.reactBtns} react-btns`}>
            <Reacts
              post={post}
              setReactCount={setReactCount}
              reactCount={reactCount}
            />
          </div>
          {reactCount} Reacts
        </span>
        <span className={styles.comments}>Comments</span>
        <span className={styles.shares}>Shares</span>
      </p>
    </div>
  );
};

export default SingleSmallPost;
