import { useRouter } from 'next/router';
import React, {Fragment, useContext, useEffect} from 'react';
import Footer from '../components/footer';
import AuthHeader from '../components/header/authHeader';
import { UserContext } from '../contexts/UserContext';

const AuthLayout = ({children})=>{
    const [user, setUser] = useContext(UserContext);
    const router = useRouter()

    useEffect(()=>{
        if(user){
            return router.push('/user/dashboard')
        }
    }, [user])

    return (
        <Fragment>
            {
                !user ?

                <Fragment>
                    <AuthHeader />
                        <main>{children}</main>
                    <Footer />
                </Fragment>
            :
                <h1 className="heading">Checking user</h1>

            }
        </Fragment>
        
    )
}

export default AuthLayout;