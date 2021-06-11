import styles from './Reacts.module.css';

const Reacts = () => {
  const addLike = (reactType) => {
    alert(reactType);
  };
  return (
    <div className={styles.reactEmojis}>
      <ul className={styles.reactEmojisList}>
        <li
          className={styles.likes}
          onClick={() => {
            addLike('like');
          }}
        >
          Like
        </li>
        <li
          className={styles.love}
          onClick={() => {
            addLike('love');
          }}
        >
          Love
        </li>
        <li
          className={styles.happy}
          onClick={() => {
            addLike('happy');
          }}
        >
          Ha Ha
        </li>
        <li
          className={styles.care}
          onClick={() => {
            addLike('care');
          }}
        >
          Care
        </li>
        <li
          className={styles.angry}
          onClick={() => {
            addLike('angry');
          }}
        >
          Angry
        </li>
        <li
          className={styles.sad}
          onClick={() => {
            addLike('sad');
          }}
        >
          Sad
        </li>
      </ul>
    </div>
  );
};

export default Reacts;
