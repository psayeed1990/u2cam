import Head from 'next/head';
import styles from './Home.module.css';

//layout
import WebLayout from './../layouts/WebLayout';

const Home = ({message})=>{

    return (
        
        <WebLayout>
            <Head>
                <title>HTML to WP theme</title>
                <p className="error">{message}</p>
            </Head>
            <h1 className="heading">Home page</h1>

        </WebLayout>

    )
}

export default Home;