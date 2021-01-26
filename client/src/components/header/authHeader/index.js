import Logo from '../../logo';
import WebMenu from '../../menu/webMenu';
import styles from './AuthHeader.module.css';
const AuthHeader = ()=>{
    return (
        <header id={styles.header}>
            <Logo />
            <WebMenu />
        </header>
    )
}

export default AuthHeader