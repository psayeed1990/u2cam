import { useContext, useState } from "react";
import Head from 'next/head';
import styles from './ForgotPassword.module.css';
import { useForm } from "react-hook-form";
import { apiCall } from "../../../../api";
import { useRouter } from "next/router";
import { UserContext } from "../../../../contexts/UserContext";
import AuthLayout from "../../../../layouts/AuthLayout";



const ForgotPassword = ()=>{
    const [operationalError, setOperationalError ] = useState('');
    const router = useRouter();
    const [user, setUser] = useContext(UserContext);
    const {register, errors, handleSubmit} = useForm();
    const onSubmit = async (data) => {
        const forgotPassword = await apiCall('POST', 'users/forgotPassword', 'forgotpassword', data);
        
        if(forgotPassword.status === 'mongoError'){
            const {errorFieldName, errorFieldValue, errorMsg} = forgotPassword;
            
            return setError(`${errorFieldName}`, {
                type: "manual",
                message: `${errorFieldName.toUpperCase()} ${errorMsg}`
            });
        }
        if(forgotPassword.operational){
             return setOperationalError(forgotPassword.operational)
        }
        setUser(forgotPassword)
        return router.push('/user/auth/forgot-password/reset-password' )

    };

    return (
        <AuthLayout>
            <Head>
                <title>Forgot Password</title>
            </Head>
            <div className="content">
            <div id={styles.forgotPassword}>
                <h1 className="heading">Forgot Password</h1>

                <div className="content" id={styles.forgotPasswordContent}>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p className="error">{operationalError}</p>
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

                       
                            
                            <input id="hidden" name="hidden" type="hidden" placeholder="hidden" autoComplete="on" />
                            
                        
                        <div className="form-group">
                            
                            <input id="submit" type="submit" value="Reset Password" />
                            
                        </div>

                    </form>

                </div>

            </div>
            </div>
        </AuthLayout>

    )
}

export default ForgotPassword;