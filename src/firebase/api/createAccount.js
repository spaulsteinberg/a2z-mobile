import axios from 'axios';

const createAccount = (firstName, lastName, email, token) => axios.post('http://127.0.0.1:3000/api/v1/account', { firstName, lastName, email, isDriver: true }, { headers: { token } })

export default createAccount