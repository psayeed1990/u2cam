import { Fragment, useContext } from 'react';
import { LoaderContext } from '../../../contexts/LoaderContext';
import Logo from '../../logo';
import AdminMenu from '../../menu/adminMenu';
import HeaderSearch from '../../search/headerSearch';
import styles from './AdminHeader.module.css';
const AdminHeader = () => {
  const [loader, setLoader] = useContext(LoaderContext);
  return (
    <header id={styles.header} className="header">
      <Logo />
      {loader ? (
        <Fragment />
      ) : (
        <Fragment>
          <HeaderSearch />

          <AdminMenu />
        </Fragment>
      )}
    </header>
  );
};

export default AdminHeader;
