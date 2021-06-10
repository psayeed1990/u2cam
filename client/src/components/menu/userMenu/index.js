import Link from 'next/link';
import showMenu from '../../../utils/showMenu';

import styles from './UserMenu.module.css';

const UserMenu = () => {
  return (
    <menu id="menu">
      <div id="menu-icon" onClick={showMenu}>
        Menu
      </div>
      <nav id="nav">
        <Link href="/">Home</Link>
        <a href="/admin/dashboard">
          <img src="/images/icons/photo.svg" width="30" />
          <ul className="subMenu">
            <li>
              <Link href="/user/auth/logout">Logout</Link>
            </li>
            <li>
              <Link href="/user/dashboard">Timeline</Link>
            </li>
          </ul>
        </a>
      </nav>
    </menu>
  );
};
export default UserMenu;
