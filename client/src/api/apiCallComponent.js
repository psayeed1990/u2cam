import { Fragment, useEffect } from "react";
import { apiCall } from ".";


const ApiCallComponent = ({setSuccess, setApiCallComponent, setError, setOperationalError, reqType, url, reason, formInput})=>{

    useEffect(()=>{
        
        const runApiCall = async()=>{
            setOperationalError('')
            const data = await apiCall(reqType, url, reason, formInput);
            
           
            if(data.response.data.status === 'fail'){

                const inputName = data.response.data.message.split(' ')[0].trim();
                const message = data.response.data.message.split(' ').slice(1).join(' ');
              
                setError(`${inputName}`, {
                    type: 'manual',
                    message: `${message}`
                });
                
		    }else if(data.response.data.status === 'error'){
                setOperationalError(data.response.data.message) 
            }else if(data.response.data.isOperational){
                setOperationalError(data.response.data.message) 
            }
            
            if(data.response.data.status === 'success'){
                setSuccess('Success')
            }

            return setApiCallComponent(false)
        }

        runApiCall();


    },[])

    return(
        <Fragment></Fragment>
    )
}

export default ApiCallComponent;