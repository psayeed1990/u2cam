import { useEffect, useState } from 'react';
import FormComponent from '../formComponents';
import styles from './Comments.module.css';

const Comments = ({ post }) => {
  const [success, setSuccess] = useState(false);
  const [returnValue, setReturnValue] = useState(null);

  useEffect(() => {
    if (success && returnValue) {
      console.log(returnValue);
    }
  }, [success, returnValue]);

  const formBuilder = [
    {
      fieldType: 'TextField',
      placeholder: 'Write a comment',
      label: '',
      initFocus: true,
      isRequired: true,
      fieldName: 'comment',
    },
  ];
  return (
    <div id={`comments-${post._id}`} className={styles.comments}>
      <FormComponent
        setSuccess={setSuccess}
        setReturnValue={setReturnValue}
        submitValue="Share"
        reason="post"
        reqType="post"
        url="posts"
        formBuilder={formBuilder}
        submitBtnExtra=""
      />
    </div>
  );
};

export default Comments;
