import Link from 'next/link';
import styles from './Logo.module.css';
const Logo = ()=>{
    return(

        <Link href="/" passHref>
            <button className={styles.logo} >BOOK<span className={styles.logoLast}>ME</span></button>
        </Link>

    )
}

export default Logo;