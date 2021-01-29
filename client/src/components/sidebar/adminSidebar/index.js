import Link from "next/link";
import styles from './AdminSidebar.module.css';

const AdminSidebar = ()=>{
    return(
        <div className={styles.sidebar}>
            <ul>
                <li className={styles.adminLinks}>
                    <Link href="/admin/users">Users</Link>
                    <ul className={styles.subMenu}>
                        <li className={`${styles.adminLinks}`}>
                            <Link href="/admin/users">Search Users</Link>
                        </li>
                        <li className={`${styles.adminLinks}`}>
                            <Link href="/admin/users/profile">Profile</Link>
                        </li>
                        <li className={`${styles.adminLinks}`}>
                            <Link href="/admin/users/create">Create User</Link>
                        </li>
                    </ul>
                </li>
                <li className={styles.adminLinks}>
                    <Link href="/admin/prfiles">Users</Link>
                </li>
            </ul>

        </div>

    )
}

export default AdminSidebar;