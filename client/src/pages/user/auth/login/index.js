import WebLayout from "../../../../layouts/WebLayout";
import Head from 'next/head';
import styles from './Login.module.css';
import { useForm } from "react-hook-form";
const Login = ()=>{
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => alert(JSON.stringify(data));

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
                            
                            <input ref={register} autoFocus={true} id="email" name="email" type="email" placeholder="Email" autoComplete="new-password"
/>
                            <label for="email">Email</label>
                        </div>
                        <div className="form-group">
                            
                            <input ref={register} id="password" name="password" type="password" placeholder="Password" autoComplete="new-password" />
                            <label for="password">Password</label>
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