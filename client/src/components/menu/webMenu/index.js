import Link from 'next/link';

import styles from './WebMenu.module.css';

const WebMenu = ()=>{
    return (
        <menu id={styles.menu}>
            <nav id={styles.nav}>
                <Link href="/">Home</Link>
                <Link href="/user/auth/login">Login</Link>
                <Link href="/user/auth/register">Register</Link>

                
            </nav>
        </menu>
    )
}
export default WebMenu;