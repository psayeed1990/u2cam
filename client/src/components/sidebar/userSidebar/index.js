import Link from "next/link";
import styles from "./UserSidebar.module.css";

const UserSidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul>
        <li className={styles.userLinks}>
          <Link href="/users/profile">Profile</Link>
        </li>
        <li className={styles.userLinks}>
          <Link href="/user/uploads">Uploads</Link>
        </li>
      </ul>
    </div>
  );
};

export default UserSidebar;
