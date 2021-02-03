import Head from 'next/head';
import styles from './Register.module.css';
import AuthLayout from '../../../../layouts/AuthLayout';
import FormComponent from '../../../../components/formComponents';
import Link from 'next/link';


export const SubmitBtnExtra = ()=>(
    <Link href="/user/auth/login">Already have account? Login here </Link>

)

const Registration =()=>{
    


    const formBuilder=
        [
            { fieldType: 'TextField', initFocus: true, maxChar:32, minChar:2, isRequired:true, fieldName:'name'},
            { fieldType: 'EmailField', initFocus: false, isRequired:true, fieldName:'email' },
            // { fieldType: 'PasswordField', initFocus: false, maxChar: 100, minChar: 8, isRequired: true, fieldName: 'password'},
            { fieldType: 'PasswordWithConfirmField', initFocus: false, maxChar: 100, minChar: 8, isRequired: true, fieldName: 'password', otherFieldName: 'passwordConfirm'},
            { fieldType: 'PasswordConfirmField', initFocus: false, maxChar: 100, minChar: 8, isRequired: true, fieldName: 'passwordConfirm', otherFieldName: 'password'},

        ];

    return (
        <AuthLayout>
            <Head>Registration form</Head>
            <div className="content">
                <div id={styles.register}>
                    <h1 className="heading">Registration</h1>
                    <div id={styles.registerContent}>
                        <FormComponent submitValue='Signup' reason='registration' reqType='POST' url='users/signup' formBuilder={formBuilder} submitBtnExtra={<SubmitBtnExtra />} sucessUrl='/user/auth/login' />
                    </div>

                </div>
            
            </div>

        </AuthLayout>
    )
}

export default Registration;