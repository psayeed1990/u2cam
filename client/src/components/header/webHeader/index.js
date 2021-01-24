import Logo from '../../logo';
import WebMenu from '../../menu/webMenu';
import styles from './WebHeader.module.css';
const WebHeader = ()=>{
    return (
        <header id={styles.header}>
            <Logo />
            <WebMenu />
        </header>
    )
}

export default WebHeader