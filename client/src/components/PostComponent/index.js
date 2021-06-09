import FormComponent from './../formComponents';
import { Fragment, useEffect, useState } from 'react';

export const SubmitBtnExtra = () => {
  return <Fragment></Fragment>;
};

const PostComponent = () => {
  const [success, setSuccess] = useState(false);
  const [returnValue, setReturnValue] = useState(null);

  useEffect(() => {
    if (success && returnValue) {
      console.log(returnValue);
    }
  }, [success, returnValue]);

  const formBuilder = [
    {
      fieldType: 'PostField',
      placeholder: `What's in your mind`,
      label: 'Share status',
      initFocus: true,
      isRequired: true,
      fieldName: 'post',
    },
  ];

  return (
    <div>
      <FormComponent
        setSuccess={setSuccess}
        setReturnValue={setReturnValue}
        submitValue="Share"
        reason="post"
        reqType="post"
        url="posts"
        formBuilder={formBuilder}
        submitBtnExtra={<SubmitBtnExtra />}
      />
    </div>
  );
};

export default PostComponent;
