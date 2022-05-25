import axios from 'axios';

const getAccount = token => axios.get('http://192.168.1.198:3000/api/v1/account', { headers: { token } })

export default getAccount