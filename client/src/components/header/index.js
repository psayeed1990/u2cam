import Logo from '../logo';
import WebMenu from '../menu/web-menu';
import styles from './Header.module.css';
const Header = ()=>{
    return (
        <header id={styles.header}>
            <Logo />
            <WebMenu />
        </header>
    )
}

export default Header