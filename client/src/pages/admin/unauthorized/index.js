import Head from 'next/head';
//layout
import WebLayout from './../../../layouts/WebLayout';


const Unauthorized = ()=>{

    return (
        
        <WebLayout>
            <Head>
                <title>Unauthorized</title>
                
            </Head>
            <h1 className="heading">Unauthorized page</h1>


        </WebLayout>

    )
}

export default Unauthorized;