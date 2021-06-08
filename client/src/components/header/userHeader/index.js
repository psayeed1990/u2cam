import Logo from '../../logo';
import UserMenu from '../../menu/userMenu';
import HeaderSearch from '../../search/headerSearch';
import styles from './UserHeader.module.css';
const UserHeader = () => {
  return (
    <header id={styles.header} className="header">
      <Logo />
      <HeaderSearch />
      <UserMenu />
    </header>
  );
};

export default UserHeader;
