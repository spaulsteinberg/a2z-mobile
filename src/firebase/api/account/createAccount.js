import axios from 'axios';

const createAccount = (firstName, lastName, email, phoneNumber, zipCode, token) => axios.post('http://127.0.0.1:3000/api/v1/account', { firstName, lastName, email, phoneNumber, zipCode, isDriver: true }, { headers: { token } })

export default createAccount