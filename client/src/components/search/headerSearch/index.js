import { useState } from 'react';
import FormComponent from '../../formComponents';
import styles from './HeaderSearch.module.css';

const HeaderSearch = () => {
  const [success, setSuccess] = useState(false);
  const [returnValue, setReturnValue] = useState(null);
  const formBuilder = [
    {
      fieldType: 'TextField',
      placeholder: 'Search',
      label: '',
      initFocus: true,
      isRequired: true,
      fieldName: 'search',
    },
  ];
  return (
    <div className={styles.headerSearch}>
      <form>
        <input type="text" placeholder="Search" />
      </form>
    </div>
  );
};

export default HeaderSearch;
