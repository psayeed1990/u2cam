import { useContext } from "react";
import Head from 'next/head';
import styles from './Login.module.css';
import { useForm } from "react-hook-form";
import { apiCall } from "../../../../api";
import { useRouter } from "next/router";
import { UserContext } from "../../../../contexts/UserContext";
import AuthLayout from "../../../../layouts/AuthLayout";



const Login = ()=>{
    const [user, setUser] = useContext(UserContext);
    const router = useRouter()
    const {register, errors, handleSubmit} = useForm();
    const onSubmit = async (data) => {
        const login = await apiCall('POST', 'users/login', 'login', data);
        setUser(login)
        return router.push('/user/dashboard' )

    };

    return (
        <AuthLayout>
            <Head>
                <title>Login</title>
            </Head>
            <div id={styles.login}>
                <h1 className="heading">Login</h1>

                <div className="content" id={styles.loginContent}>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        
                        <div className="form-group">
                            
                            <input ref={register({
                                required: 'Email is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "Invalid email format"
                                }
                            })} autoFocus={true} id="email" name="email" type="email" placeholder="Email" autoComplete="new-password"/>
                            <label htmlFor="email">Email</label>
                            <span className={`${errors.email ? 'error': ''}`}>{errors.email?.message}</span>
                        </div>
                        <div className="form-group">
                            
                            <input ref={register({
                                required: 'Password is required',
                            })} id="password" name="password" type="password" placeholder="Password" autoComplete="new-password" />
                            <label htmlFor="password">Password</label>
                            <span className={`${errors.password ? 'error': ''}`}>{errors.password?.message}</span>
                        </div>
                       
                            
                            <input id="hidden" name="hidden" type="hidden" placeholder="hidden" autoComplete="on" />
                            
                        
                        <div className="form-group">
                            
                            <input id="submit" type="submit" value="Login" />
                            
                        </div>

                    </form>

                </div>

            </div>
        </AuthLayout>

    )
}

export default Login;