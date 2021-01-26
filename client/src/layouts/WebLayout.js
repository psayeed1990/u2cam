import React, {Fragment, useContext} from 'react';
import Footer from '../components/footer';
import AuthHeader from '../components/header/authHeader';
import UserHeader from '../components/header/userHeader';
import { UserContext } from '../contexts/UserContext';

const WebLayout = ({children})=>{
    const [user, setUser] = useContext(UserContext);

    return (
        
        <Fragment>
            {user ? <UserHeader /> :  <AuthHeader />}
           
                <main>{children}</main>
            <Footer />
        </Fragment>

        
    )
}

export default WebLayout;