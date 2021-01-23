import React, {Fragment} from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
const UserLayout = ({children})=>{
    return (
        <Fragment>
            <Header />
                <main>{children}</main>
            <Footer />
        </Fragment>
    )
}

export default UserLayout;