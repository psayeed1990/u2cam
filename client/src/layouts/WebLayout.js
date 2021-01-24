import React, {Fragment, useContext} from 'react';
import Footer from '../components/footer';
import UserHeader from '../components/header/userHeader';
import WebHeader from '../components/header/webHeader';
import { UserContext } from '../contexts/UserContext';

const WebLayout = ({children})=>{
    const [user, setUser] = useContext(UserContext);
    return (
        <Fragment>
            {
                user?

                <Fragment>
                    <UserHeader />
                        <main>{children}</main>
                    <Footer />
                </Fragment>
            :
                <Fragment>
                    <WebHeader />
                        <main>{children}</main>
                    <Footer />
                </Fragment>

            }
        </Fragment>
        
    )
}

export default WebLayout;