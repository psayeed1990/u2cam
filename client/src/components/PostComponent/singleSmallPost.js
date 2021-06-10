import styles from './SingleSmallPost.module.css';
import moment from 'moment';

const SingleSmallPost = ({ post }) => {
  return (
    <div className={styles.post}>
      <div className={styles.postTop}>
        <p className={styles.name}>
          <b>{post?.user?.name}</b>
        </p>

        <p className={styles.privacy}>{post?.privacy}</p>
        <p className={styles.text}>{post?.text}</p>
        <p className={styles.time}>{moment(post.createdAt).fromNow()}</p>
      </div>

      <p className={styles.postBottom}>
        <span className={styles.reacts}>Reacts</span>
        <span className={styles.comments}>Comments</span>
        <span className={styles.shares}>Shares</span>
      </p>
    </div>
  );
};

export default SingleSmallPost;
