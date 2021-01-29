import Link from 'next/link';

import styles from './AdminMenu.module.css';

const AdminMenu = ()=>{
    return (
        <menu id={styles.menu}>
            <nav id={styles.nav}>
                <Link href="/">Home</Link>
                <Link href="/admin/dashboard">Dashboard</Link>
                <Link href="/user/auth/logout">Logout</Link>
                
            </nav>
        </menu>
    )
}
export default AdminMenu;