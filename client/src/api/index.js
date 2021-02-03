import Axios from 'axios';


export const apiCall = async (reqType, url, reason, formInput, user) => {

    const URL = `/api/v1/${url}`;
	try {

		const {data} = await Axios[reqType](URL, formInput);
		return data;

		// if (reqType === 'GET') {
		// 	const {data} = await Axios.get(URL, formInput);

		// 	return data.data.data;
		// } else if (reqType === 'POST') {
			
		// 	const {data} = await Axios.post(URL, formInput);

		// 	if (reason === 'login') {
        //         //login code
				
        //         localStorage.setItem('token', data.refreshToken);
        //         return data.data.user;
				
                
		// 	} else if (reason === 'registration') {
		// 		//register code
		// 		// localStorage.setItem('token', data.refreshToken);
		// 		return data

		// 	} else {
        //         //normal code
		// 		return data.data.data;
		// 	}
		// } else if (reqType === 'PATCH') {
		// 	const {data} = await Axios.patch(URL, formInput);

		// 	return data.json();
		// } else if (reqType === 'DELETE') {

		// 	console.log('hi')
		// 	const {data} = await Axios.delete(URL, formInput);

		// 	return data;
		// }
	} catch (err) {

		return err
		



		

	}
};