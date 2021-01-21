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
                        <Image src="/images/icons/people-formal.svg" width="100" height="auto" />
                    </div>
                    <form>
                        <div className="form-group">
                            
                            <input id="name" name="name" type="text" placeholder="Name" />
                            <label for="name">Name</label>
                        </div>
                        <div className="form-group">
                            
                            <input id="email" name="email" type="email" placeholder="Email" />
                            <label for="email">Email</label>
                        </div>

                    </form>
                    <div className="image-container">
                        {/* <Image src="/images/icons/balloons.svg" width="80" height="auto" /> */}
                        <Image src="/images/icons/buddha.svg" width="100" height="auto" />
                    </div>

                </div>

            </div>
            
        </WebLayout>
    )
}

export default Register;