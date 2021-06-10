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

  const privacy = [
    { name: 'public' },
    { name: 'friends' },
    { name: 'friends and followers' },
    { name: 'followers' },
    { name: 'anonymous' },
    { name: 'group' },
    { name: 'pages' },
  ];

  const formBuilder = [
    {
      fieldType: 'CustomSelectField',
      selectMenuArray: privacy,
      nameToShowOnList: 'name',
      nameToUseAsValue: 'name',
      placeholder: 'Privacy',
      label: 'Privacy',
      initFocus: false,
      maxChar: 100,
      minChar: 2,
      isRequired: true,
      fieldName: 'privacy',
    },

    {
      fieldType: 'PostField',
      placeholder: `What's in your mind`,
      label: 'Share status',
      initFocus: true,
      isRequired: true,
      fieldName: 'text',
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
