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
            <UserHeader />
            { !loader && user?
                
                <main>{children}</main>
            :
                <h1 className="heading">Fetching user...</h1>
            }
            <Footer />
        </Fragment>
        
        
    )
}

export default UserLayout;