import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from './SingleUpload.module.css';
import UserLayout from './../../../../layouts/UserLayout';
import FormComponent from '../../../../components/formComponents';
import { Fragment, useEffect, useState } from 'react';
import { apiCall } from '../../../../api';

export const SubmitBtnExtra = () => (
  <Fragment>
    {/* <Link href="/user/auth/login">Already have account? Login here </Link> */}
  </Fragment>
);

const SingleUpload = () => {
  const router = useRouter();
  const { id } = router.query;
  const [singleUpload, setSingleUpload] = useState(null);
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [returnValue, setReturnValue] = useState(null);
  const [formBuilder, setFormBuilder] = useState(null);

  useEffect(() => {
    if (id) {
      const getUpload = async () => {
        const data = await apiCall(
          'get',
          `uploads/${id}`,
          'get upload html theme'
        );

        setSingleUpload(data.data.data);
      };

      getUpload();
    }
  }, [id, success]);

  useEffect(() => {
    if (success && returnValue) {
      setMessage('Theme setting updated successfully');
    }
  }, [success, returnValue]);

  useEffect(() => {
    if (singleUpload) {
      const formBuilder = [
        {
          fieldType: 'TextField',
          label: 'Name',
          initFocus: false,
          maxChar: 32,
          minChar: 2,
          isRequired: true,
          fieldName: 'name',
          value: singleUpload?.name,
          placeholder: singleUpload?.name,
        },

        {
          fieldType: 'CustomTypeTextField',
          label: 'Theme Type',
          customTypesArray: ['html'],
          initFocus: false,
          maxChar: 4,
          minChar: 4,
          isRequired: true,
          fieldName: 'type',
          value: singleUpload?.type,
          placeholder: singleUpload?.type,
        },
      ];

      setFormBuilder(formBuilder);
    }
  }, [singleUpload]);

  return (
    <UserLayout>
      <Head>
        <title>Theme Update</title>
      </Head>
      <div className="content">
        {singleUpload ? (
          <div id={styles.register}>
            <h1 className="heading">{singleUpload.name}</h1>
            <img src="/images/icons/photo.svg" width={70} height={70} />
            <div id={styles.registerContent}>
              <h5 className="heading success-message">{message}</h5>
              <FormComponent
                setSuccess={setSuccess}
                setReturnValue={setReturnValue}
                submitValue="Update"
                reason="Update theme"
                reqType="patch"
                url={`uploads/${id}`}
                formBuilder={formBuilder}
                submitBtnExtra={<SubmitBtnExtra />}
              />
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </UserLayout>
  );
};

export default SingleUpload;
