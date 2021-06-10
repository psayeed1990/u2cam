import styles from './SingleSmallPost.module.css';

const SingleSmallPost = ({ post }) => {
  return (
    <div className={styles.post}>
      <p>
        <b>{post?.user?.name}</b>
      </p>
      <small>{post?.privacy}</small>
      <p>{post?.text}</p>
    </div>
  );
};

export default SingleSmallPost;
