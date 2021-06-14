import styles from './SingleSmallPost.module.css';
import moment from 'moment';
import Reacts from './reacts';
import { useEffect, useState } from 'react';

const SingleSmallPost = ({ post, user }) => {
  const [reactText, setReactText] = useState('Like');
  const [reactCount, setReactCount] = useState(0);
  const showReactBtns = (e) => {
    const reacts = e.currentTarget.firstChild;
    reacts.style.display = 'block';
  };

  useEffect(() => {
    if (post) {
      setReactCount(post.reactcount);
      post.reacts.reacts.map((react) => {
        if (react.by === user._id) {
          if (react.reacttype === 'like') {
            setReactText('Liked');
          } else if (react.reacttype === 'love') {
            setReactText('Loved');
          } else if (react.reacttype === 'angry') {
            setReactText('Angry');
          } else if (react.reacttype === 'sad') {
            setReactText('Sad');
          } else if (react.reacttype === 'happy') {
            setReactText('Happy');
          } else if (react.reacttype === 'care') {
            setReactText('Care');
          } else {
            setReactText('Like');
          }
        }
      });
    }
  }, [post]);

  useEffect(() => {
    if (document.getElementById(`${post._id}-react-text`)) {
      const reactStatus = document.getElementById(`${post._id}-react-text`);
      if (reactText !== 'Like') {
        reactStatus.parentNode.style.backgroundColor = '#fafafa';
        reactStatus.style.color = 'purple';
      } else {
        reactStatus.parentNode.style.backgroundColor = 'inherit';
        reactStatus.style.color = 'inherit';
      }
    }
  }, [reactText]);

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

      <p className={styles.likeCount}>{reactCount}</p>

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
              setReactText={setReactText}
              reactText={reactText}
            />
          </div>
          <p id={`${post._id}-react-text`}>{reactText}</p>
        </span>
        <span className={styles.comments}>Comments</span>
        <span className={styles.shares}>Shares</span>
      </p>
    </div>
  );
};

export default SingleSmallPost;
