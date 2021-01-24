import Link from 'next/link';

import styles from './UserMenu.module.css';

const UserMenu = ()=>{
    return (
        <menu id={styles.menu}>
            <nav id={styles.nav}>
                <Link href="/">Home</Link>
                <Link href="/user/dashboard">Dashboard</Link>
                <Link href="/user/auth/logout">Logout</Link>
                
            </nav>
        </menu>
    )
}
export default UserMenu;