import Axios from 'axios';

export const apiCall = async (reqType, url, reason, data, user) => {
    const URL = `http://localhost:8082/api/v1/${url}`;
	try {
		let response;
		if (reqType === 'GET') {
			response = await Axios.get(URL, data);

			return response.json();
		} else if (reqType === 'POST') {
			response = await Axios.post(URL, data);

			if (reason === 'login') {
                //login code

                localStorage.setItem('token', response.data.refreshToken);
                localStorage.setItem('role', response.data.data.user.role);
                console.log(response.data.data.user);
                return(response.data.data.user);
				
                
			} else if (reason === 'register') {
                //register code
				return response.json();

			} else {
                //normal code
				return response.json();
			}
		} else if (reqType === 'PATCH') {
			response = await Axios.PATCH(URL, data);

			return response.json();
		} else if (reqType === 'DELETE') {
			response = await Axios.DELETE(URL, data);

			return response.json();
		}
	} catch (err) {
		console.log(err);
	}
};
