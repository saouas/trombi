import axios from 'axios';

const getUsers = async (URL) => {
  return await axios.get(URL);
};

const endpoint = {
  'BASE_URL': process.env.REACT_APP_API_ENDPOINT,
  'GET_USERS': getUsers,
  'GET_USERS_ROUTE': 'trombi/users'
};

export default {
  endpoint
};
