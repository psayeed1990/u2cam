import Head from 'next/head';
//layout
import WebLayout from './../../../layouts/WebLayout';


const Unauthorized = ()=>{

    return (
        
        <WebLayout>
            <Head>
                <title>Unauthorized</title>
                
            </Head>
            <div className="content">
            <h1 className="heading">Unauthorized page</h1>
            </div>


        </WebLayout>

    )
}

export default Unauthorized;