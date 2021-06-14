import Link from 'next/link';
import showMenu from '../../../utils/showMenu';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';

import styles from './AdminMenu.module.css';

const AdminMenu = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <menu id="menu">
      <div id="menu-icon" onClick={showMenu}>
        Menu
      </div>
      <nav id="nav">
        <Link href="/">Home</Link>
        <Link href="/admin/dashboard">
          <img
            src="/images/icons/photo.svg"
            width="30"
            className={styles.avatar}
          />
        </Link>
        <ul className="subMenu">
          <li>
            <Link href="/user/auth/logout">Logout</Link>
          </li>
          <li>
            <Link href="/user/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </menu>
  );
};
export default AdminMenu;
