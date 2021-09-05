import styles from './SingleSmallPost.module.css';
import moment from 'moment';
import Reacts from './reacts';
import { useEffect, useState } from 'react';
import Comments from './comments';

const SingleSmallPost = ({ post, user }) => {
  const [reactText, setReactText] = useState('Like');
  const [reactCount, setReactCount] = useState(0);
  const [currentPost, setCurrentPost] = useState({});
  const showReactBtns = (e) => {
    const reacts = e.currentTarget.firstChild;
    reacts.style.display = 'block';
  };

  useEffect(() => {
    if (post) {
      setCurrentPost(post);
    }
  }, [currentPost, setCurrentPost]);

  useEffect(() => {
    if (currentPost) {
      //set react count
      setReactCount(currentPost.reactcount);
      currentPost?.reacts?.reacts.map((react) => {
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
  }, [currentPost]);

  useEffect(() => {
    if (document.getElementById(`${currentPost._id}-react-text`)) {
      const reactStatus = document.getElementById(
        `${currentPost._id}-react-text`
      );
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
            {currentPost?.user?.firstname} {currentPost?.user?.lastname}
          </b>
        </p>

        <p className={styles.privacy}>{currentPost?.privacy}</p>
        <p className={styles.text}>{currentPost?.text}</p>
        <p className={styles.time}>{moment(currentPost.createdAt).fromNow()}</p>
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
              currentPost={currentPost}
              setCurrentPost={setCurrentPost}
              setReactCount={setReactCount}
              reactCount={reactCount}
              setReactText={setReactText}
              reactText={reactText}
              user={user}
            />
          </div>
          <p id={`${currentPost._id}-react-text`}>{reactText}</p>
        </span>
        <span className={styles.comments}>Comments</span>
        <span className={styles.shares}>Shares</span>
      </p>

      <Comments post={post} />
    </div>
  );
};

export default SingleSmallPost;
