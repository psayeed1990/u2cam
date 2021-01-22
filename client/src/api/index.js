import Axios from 'axios';

export const apiCall = async (reqType, url, data, user)=>{

    try{
        let response;
        if(reqType === 'GET'){
            
            response = await Axios.GET(url, data);

            return response.json();

        }else if(reqType === 'POST'){
            response = await Axios.POST(url, data);

            return response.json();

        }else if(reqType === 'PATCH'){
            response = await Axios.PATCH(url, data);

            return response.json();
        }else if(reqType === 'DELETE'){
            response = await Axios.DELETE(url, data);

            return response.json();
        }
    }catch(err){
        console.log(err);
    }
    


}
