import Head from 'next/head';
import {useForm} from 'react-hook-form';
import {apiCall} from "../../../../api";
import styles from './../registration/Register.module.css';
import AuthLayout from '../../../../layouts/AuthLayout';
import { useState } from 'react';

const ResetPassword = ()=>{
    const [operationalError, setOperationalError ] = useState('');
    const {register, errors, clearErrors, getValues, setError, handleSubmit} = useForm();
    const onSubmit = async (data) => {
        setOperationalError('')
        const resetPassword = await apiCall('POST', 'users/resetPassword/', 'resetPassword', data);

        if(resetPassword.status === 'mongoError'){
            const {errorFieldName, errorFieldValue, errorMsg} = resetPassword;
            
            setError(`${errorFieldName}`, {
                type: "manual",
                message: `${errorFieldName.toUpperCase()} ${errorMsg}`
            });
        }

        if(resetPassword.operational){
            setOperationalError(resetPassword.operational)
        }
       
    };

    return (
        <AuthLayout>
            <Head><title>Reset Password</title></Head>
            <div id={styles.register}>
                <h1 className="heading">Reset Password</h1>

                <div className="content" id={styles.registerContent}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p className="error">{operationalError}</p>
 
                    
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
                                if(getValues('password') !== getValues('passwordConfirm') ){
                                    setError("passwordConfirm", {
                                        type: "manual",
                                        message: "Password should match "
                                    });
                                }else{
                                    clearErrors('passwordConfirm')
                                }
                                
                            }}/>
                            <label htmlFor="password">Password</label>
                            <span className={`${errors.password ? 'error': ''}`}>{errors.password?.message}</span>
                        </div>
                        <div className="form-group">
                            
                            <input ref={register({
                                required: "Password again is required"
                            })} id="confirm-password" name="passwordConfirm" type="password" placeholder="Password Confirm" autoComplete="new-password" onChange={() => {
                                if(getValues('password') !== getValues('passwordConfirm') ){
                                    setError("passwordConfirm", {
                                        type: "manual",
                                        message: "Password should match "
                                    });
                                }else{
                                    clearErrors('passwordConfirm')
                                }
                                
                            }} />
                            <label htmlFor="confirm-password">Password Again</label>
                           
                            <span className={`${errors.passwordConfirm ? 'error': ''}`}>{errors.passwordConfirm?.message}</span>
                        </div>
                       
                            
                            <input id="hidden" name="hidden" type="hidden" placeholder="hidden" autoComplete="on" />
                            
                        
                        <div className="form-group">
                            
                            <input id="submit" type="submit" value="Change Password" />

                        </div>

                    </form>

                </div>

            </div>
             


        </AuthLayout>
    )
}

export default ResetPassword;