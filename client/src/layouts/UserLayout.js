import { useRouter } from 'next/router';
import React, {Fragment, useContext, useEffect} from 'react';
import Footer from '../components/footer';
import UserHeader from '../components/header/userHeader';
import { LoaderContext } from '../contexts/LoaderContext';
import { UserContext } from '../contexts/UserContext';

const UserLayout = ({children})=>{
    const [loader, setLoader] = useContext(LoaderContext);
    const [user, setUser] = useContext(UserContext);
    const router = useRouter()

    useEffect(()=>{
        if(!user){
            return router.push('/user/auth/login')
        }
    }, [user])

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
                <h1 className="heading">Checking user</h1>

            }
        </Fragment>
        
    )
}

export default UserLayout;