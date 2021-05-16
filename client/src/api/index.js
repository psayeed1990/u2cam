import Axios from 'axios';

export const apiCall = async (reqType, url, reason, formInput, user) => {
  const URL = `/api/v1/${url}`;
  try {
    const { data } = await Axios[reqType](URL, formInput);

    return data;
  } catch (err) {
    return err;
  }
};
