import Head from 'next/head';
import {useForm} from 'react-hook-form';
import styles from './CreateUser.module.css';
import { useContext, useState } from 'react';
import { apiCall } from '../../../../api';
import AdminLayout from '../../../../layouts/AdminLayout';
import { UserContext } from '../../../../contexts/UserContext';

const CreateUser = ()=>{
    const [user, setUser] = useContext(UserContext);
    const [operationalError, setOperationalError ] = useState('');
    const [success, setSuccess] = useState(null);
    const {register, errors, clearErrors, getValues, setError, handleSubmit} = useForm();
    const onSubmit = async (data) => {
        setOperationalError('')
        const registration = await apiCall('POST', 'users/signup', 'registration', data, user);

        if(registration.status === 'mongoError'){
            const {errorFieldName, errorFieldValue, errorMsg} = registration;
            
            return setError(`${errorFieldName}`, {
                type: "manual",
                message: `${errorFieldName.toUpperCase()} ${errorMsg}`
            });
        }

        if(registration.operational){
            return setOperationalError(registration.operational)
        }

        return setSuccess(`${getValues('role')} created`)
       
    };

    return (
        <AdminLayout>
            <Head><title>Create A User</title></Head>
            <div className="content">
            <div id={styles.register}>
                <h1 className="heading">Create a user, admin, moderator</h1>

                <div className="content" id={styles.registerContent}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p className="error">{operationalError}</p>

                        <div className="form-group">
                            
                            <input ref={register({
                                required: "User type is required",
                                maxLength: {
                                    value: 32,
                                    message: "Max 32 character",
                                },
                                minLength: {
                                    value: 2,
                                    message: "Min 2 character",
                                },
                                validate: value => (['admin', 'user', 'moderator']).includes(value) || "admin or moderator or user",

                            })} id="role" autoFocus={true} name="role" type="text" placeholder="admin, moderator or user" autoComplete="new-password" onChange={()=>{
                                if(!(['admin', 'user', 'moderator']).includes(getValues('role'))){
                                    setError("role", {
                                        type: "manual",
                                        message: "Only 'user', 'moderator' and 'admin' ",
                                    });
                                }else{
                                    clearErrors('role')
                                }
                            }} />
                            <label htmlFor="role">User Type</label>
                            <span className={`${errors.role ? 'error': ''}`}>{errors.role?.message}</span>
                        </div>

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
                            })} id="name" name="name" type="text" placeholder="Name" autoComplete="new-password" />
                            <label htmlFor="name">Name</label>
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
                            <label htmlFor="email">Email</label>
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
                            
                            <input id="submit" type="submit" value={`Create ${getValues('role')? getValues('role') : ''}`} />
                            
                        </div>

                    </form>

                </div>

            </div>
             
                        </div>

        </AdminLayout>
    )
}

export default CreateUser;