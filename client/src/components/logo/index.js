import Link from 'next/link';
import styles from './Logo.module.css';
const Logo = () => {
  return (
    <Link href="/" passHref>
      <button className={styles.logo}>
        <img src="/images/logo.png" width="30" />
      </button>
    </Link>
  );
};

export default Logo;
