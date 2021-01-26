import Axios from 'axios';


export const apiCall = async (reqType, url, reason, formInput, user) => {

    const URL = `/api/v1/${url}`;
	try {
		if (reqType === 'GET') {
			const {data} = await Axios.get(URL, formInput);

			return data;
		} else if (reqType === 'POST') {
			
			const {data} = await Axios.post(URL, formInput);

			if (reason === 'login') {
                //login code
				
                localStorage.setItem('token', data.refreshToken);
				localStorage.setItem('name', data.data.user.name);
				localStorage.setItem('role', data.data.user.role);
                return data.data.user;
				
                
			} else if (reason === 'registration') {
				//register code
				console.log(data)

			} else {
                //normal code
				return data;
			}
		} else if (reqType === 'PATCH') {
			const {data} = await Axios.PATCH(URL, formInput);

			return data.json();
		} else if (reqType === 'DELETE') {
			const {data} = await Axios.DELETE(URL, formInput);

			return data;
		}
	} catch (err) {

		console.log(err);
	}
};