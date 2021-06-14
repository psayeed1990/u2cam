import { useEffect, useState } from 'react';
import styles from './Reacts.module.css';
import ApiCallComponent from './../../api/apiCallComponent';

const Reacts = ({ post, postType, reactCount, setReactCount }) => {
  const [apiCallComponent, setApiCallComponent] = useState(false);
  const [success, setSuccess] = useState(false);
  const [returnValue, setReturnValue] = useState(null);
  const [error, setError] = useState('');
  const [value, setValue] = useState('');
  const [operationalError, setOperationalError] = useState('');
  const [apiData, setApiData] = useState({});
  const addLike = (reactType) => {
    setApiData({
      post: post._id,
      reacts: post.reacts,
      reacttype: reactType,
      posttype: postType,
    });
    setApiCallComponent(true);
  };

  useEffect(() => {
    if (success) {
      setReactCount(reactCount + 1);
      console.log('likes');
    }
  }, [success]);

  return (
    <div className={styles.reactEmojis}>
      {apiCallComponent && (
        <ApiCallComponent
          setSuccess={setSuccess}
          setReturnValue={setReturnValue}
          setApiCallComponent={setApiCallComponent}
          setError={setError}
          setValue={setValue}
          setOperationalError={setOperationalError}
          reqType={'post'}
          url={'reacts'}
          reason={'reacts'}
          formInput={apiData}
        />
      )}

      <ul className={styles.reactEmojisList}>
        <li
          className={styles.likes}
          onClick={() => {
            addLike('like');
          }}
        >
          Likes
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
