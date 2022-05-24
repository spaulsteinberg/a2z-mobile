import axios from 'axios';

const getAccount = token => axios.get('http://127.0.0.1:3000/api/v1/account', { headers: { token } })

export default getAccount