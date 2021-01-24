import Logo from '../../logo';
import UserMenu from '../../menu/userMenu';
import styles from './UserHeader.module.css';
const UserHeader = ()=>{
    return (
        <header id={styles.header}>
            <Logo />
            <UserMenu />
        </header>
    )
}

export default UserHeader