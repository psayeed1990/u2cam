import WebLayout from "../../../../layouts/WebLayout";
import Head from 'next/head';
import styles from './Login.module.css';
import { useForm } from "react-hook-form";
import { apiCall } from "../../../../api";
const Login = ()=>{
    const {register, errors, handleSubmit} = useForm();

    const onSubmit = async (data) => {
        const login = await apiCall('POST', '/users/login', 'login', data);
        console.log(login);
    };

    return (
        <WebLayout>
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
        </WebLayout>
    )
}

export default Login;