import Link from 'next/link';

import styles from './WebMenu.module.css';

const WebMenu = ()=>{
    return (
        <menu id={styles.menu}>
            <nav id={styles.nav}>
                <Link href="/">home</Link>
                <Link href="/user/auth/login">login</Link>
                <Link href="/user/auth/register">register</Link>
                
            </nav>
        </menu>
    )
}
export default WebMenu;