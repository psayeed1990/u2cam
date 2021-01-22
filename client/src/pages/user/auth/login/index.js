import WebLayout from "../../../../layouts/WebLayout";
import styles from './Login.module.css';
const Login = ()=>{
    return (
        <WebLayout>
            <div id={styles.login}>
                <h1 className="heading">Login</h1>

                <div className="content" id={styles.loginContent}>

                    <form>
                        
                        <div className="form-group">
                            
                            <input autoFocus={true} id="email" name="email" type="email" placeholder="Email" autoComplete="new-password"
/>
                            <label for="email">Email</label>
                        </div>
                        <div className="form-group">
                            
                            <input id="password" name="password" type="password" placeholder="Password" autoComplete="new-password" />
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