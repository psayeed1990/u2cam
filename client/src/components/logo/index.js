import Link from 'next/link';
import styles from './Logo.module.css';
const Logo = ()=>{
    return(

        <Link href="/" passHref>
            <div className={styles.logo} >HTML-WP </div>
        </Link>

    )
}

export default Logo;