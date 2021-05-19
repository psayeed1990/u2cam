import Link from 'next/link';
import styles from './Logo.module.css';
const Logo = () => {
  return (
    <Link href="/" passHref>
      <button className={styles.logo}>
        U
        <span className={styles.logoLast}>
          <span className={styles.round}>2</span>
        </span>
        CAM
      </button>
    </Link>
  );
};

export default Logo;
