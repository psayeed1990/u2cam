import Axios from 'axios';


export const apiCall = async (reqType, url, reason, formInput, user) => {

    const URL = `/api/v1/${url}`;
	try {
		if (reqType === 'GET') {
			const {data} = await Axios.get(URL, formInput);

			return data.data.data;
		} else if (reqType === 'POST') {
			
			const {data} = await Axios.post(URL, formInput);

			if (reason === 'login') {
                //login code
				
                localStorage.setItem('token', data.refreshToken);
                return data.data.user;
				
                
			} else if (reason === 'registration') {
				//register code
				console.log(data)
				return data

			} else {
                //normal code
				return data.data.data;
			}
		} else if (reqType === 'PATCH') {
			const {data} = await Axios.PATCH(URL, formInput);

			return data.json();
		} else if (reqType === 'DELETE') {
			const {data} = await Axios.DELETE(URL, formInput);

			return data.data.data;
		}
	} catch (err) {
		

		if(err.response.data.error.isOperational){
			return {operational: err.response.data.message}
		}

		//mongoose error code debunk
		let errorName = err.response.data.error.name
		if(errorName === 'MongoError'){
			let errorCode = err.response.data.error.code;
			let errorFieldName = Object.keys(err.response.data.error.keyValue)[0];
			let errorFieldValue = Object.values(err.response.data.error.keyValue)[0];
			let errorMsg = '';
		
			
			if( errorCode === 11000){
				errorMsg = `already exist`;
			}
		

			return {status: 'mongoError', errorFieldName, errorFieldValue, errorMsg}
		}

		return { operational: err.response.data.message}

	}
};