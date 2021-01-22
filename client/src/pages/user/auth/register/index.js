import Image from 'next/image';

import WebLayout from "../../../../layouts/WebLayout";

import styles from './Register.module.css';

const Register = ()=>{
    return (
        <WebLayout>
            <div id={styles.register}>
                <h1 className="heading">Register</h1>

                <div className="content" id={styles.registerContent}>
                    <div className="image-container">
                        {/* <Image src="/images/icons/balloons.svg" width="80" height="auto" /> */}
                        {/* <Image src="/images/icons/people.svg" width="300" height="auto" />  */}
                    </div>
                    <form>
                        <div className="form-group">
                            
                            <input id="name" autoFocus={true} name="name" type="text" placeholder="Name" autoComplete="new-password" />
                            <label for="name">Name</label>
                        </div>
                        
                        <div className="form-group">
                            
                            <input id="email" name="email" type="email" placeholder="Email" autoComplete="new-password"
/>
                            <label for="email">Email</label>
                        </div>
                        <div className="form-group">
                            
                            <input id="password" name="password" type="password" placeholder="Password" autoComplete="new-password" />
                            <label for="password">Password</label>
                        </div>
                        <div className="form-group">
                            
                            <input id="password-again" name="passwordAgain" type="password" placeholder="Password again" autoComplete="new-password" />
                            <label for="password-again">Password Again</label>
                        </div>
                       
                            
                            <input id="hidden" name="hidden" type="hidden" placeholder="hidden" autoComplete="on" />
                            
                        
                        <div className="form-group">
                            
                            <input id="submit" type="submit" value="Signup" />
                            
                        </div>

                    </form>
                    <div className="image-container">
                        {/* <Image src="/images/icons/calender.svg" width="80" height="auto" /> */}
                        {/* <Image src="/images/icons/buddha.svg" width="100" height="auto" /> */}
                    </div>

                </div>

            </div>
            
        </WebLayout>
    )
}

export default Register;