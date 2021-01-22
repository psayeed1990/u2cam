import Head from 'next/head';
import Image from 'next/image';
import {useForm} from 'react-hook-form';
import WebLayout from "../../../../layouts/WebLayout";

import styles from './Register.module.css';

const Register = ()=>{

    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => alert(JSON.stringify(data));

    return (
        <WebLayout>
            <Head><title>Register</title></Head>
            <div id={styles.register}>
                <h1 className="heading">Register</h1>

                <div className="content" id={styles.registerContent}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            
                            <input ref={register} id="name" autoFocus={true} name="name" type="text" placeholder="Name" autoComplete="new-password" />
                            <label for="name">Name</label>
                        </div>
                        
                        <div className="form-group">
                            
                            <input ref={register} id="email" name="email" type="email" placeholder="Email" autoComplete="new-password"
/>
                            <label for="email">Email</label>
                        </div>
                        <div className="form-group">
                            
                            <input ref={register} id="password" name="password" type="password" placeholder="Password" autoComplete="new-password" />
                            <label for="password">Password</label>
                        </div>
                        <div className="form-group">
                            
                            <input ref={register} id="password-again" name="passwordAgain" type="password" placeholder="Password again" autoComplete="new-password" />
                            <label for="password-again">Password Again</label>
                        </div>
                       
                            
                            <input id="hidden" name="hidden" type="hidden" placeholder="hidden" autoComplete="on" />
                            
                        
                        <div className="form-group">
                            
                            <input id="submit" type="submit" value="Signup" />
                            
                        </div>

                    </form>

                </div>

            </div>
            
        </WebLayout>
    )
}

export default Register;