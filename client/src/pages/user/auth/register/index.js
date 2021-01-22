import Head from 'next/head';
import {useForm} from 'react-hook-form';
import WebLayout from "../../../../layouts/WebLayout";
import {apiCall} from "../../../../api/";


import styles from './Register.module.css';

const Register = ()=>{

    const {register, errors, clearErrors, getValues, setError, handleSubmit} = useForm();
    const onSubmit = async (data) => {
        return await apiCall('GET', '/api/user/signup', data);
    };

    return (
        <WebLayout>
            <Head><title>Register</title></Head>
            <div id={styles.register}>
                <h1 className="heading">Register</h1>

                <div className="content" id={styles.registerContent}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            
                            <input ref={register({
                                required: "Name is required",
                                maxLength: {
                                    value: 32,
                                    message: "Max 32 character",
                                },
                                minLength: {
                                    value: 2,
                                    message: "Min 2 character",
                                }
                            })} id="name" autoFocus={true} name="name" type="text" placeholder="Name" autoComplete="new-password" />
                            <label for="name">Name</label>
                            <span className={`${errors.name ? 'error': ''}`}>{errors.name?.message}</span>
                        </div>
                            
                        <div className="form-group">
                            
                            <input ref={register({
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: 'Invalid email address format',
                                },
                            })} id="email" name="email" type="text" placeholder="Email" autoComplete="new-password" />
                            <label for="email">Email</label>
                             <span className={`${errors.email ? 'error': ''}`}>{errors.email?.message}</span>
                        </div>
                        <div className="form-group">
                            
                            <input ref={register({
                                required: "Password is required",
                                maxLength: {
                                    value: 100,
                                    message: "Max 100 character",
                                },
                                minLength: {
                                    value: 8,
                                    message: "Min 8 character",
                                }
                            })} id="password" name="password" type="password" placeholder="Password" autoComplete="new-password" onChange={() => {
                                if(getValues('password') !== getValues('passwordAgain') ){
                                    setError("passwordAgain", {
                                        type: "manual",
                                        message: "Password should match "
                                    });
                                }else{
                                    clearErrors('passwordAgain')
                                }
                                
                            }}/>
                            <label for="password">Password</label>
                            <span className={`${errors.password ? 'error': ''}`}>{errors.password?.message}</span>
                        </div>
                        <div className="form-group">
                            
                            <input ref={register({
                                required: "Password again is required"
                            })} id="password-again" name="passwordAgain" type="password" placeholder="Password again" autoComplete="new-password" onChange={() => {
                                if(getValues('password') !== getValues('passwordAgain') ){
                                    setError("passwordAgain", {
                                        type: "manual",
                                        message: "Password should match "
                                    });
                                }else{
                                    clearErrors('passwordAgain')
                                }
                                
                            }} />
                            <label for="password-again">Password Again</label>
                           
                            <span className={`${errors.passwordAgain ? 'error': ''}`}>{errors.passwordAgain?.message}</span>
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