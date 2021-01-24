import Link from 'next/link';
import styles from './Logo.module.css';
const Logo = ()=>{
    return(

        <Link href="/" passHref>
            <button className={styles.logo} >HTML<span className={styles.logoLast}><span className={styles.round}>W</span>P</span></button>
        </Link>

    )
}

export default Logo;