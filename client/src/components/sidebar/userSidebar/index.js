import Link from 'next/link';
import styles from './UserSidebar.module.css';

const UserSidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul>
        <li className={styles.userLinks}>
          <Link href="/user/profile">Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default UserSidebar;
