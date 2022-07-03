import axios from 'axios';
import { URL_ENDPOINT } from '../info';

const createAccount = (firstName, lastName, email, phoneNumber, zipCode, token) => axios.post(`${URL_ENDPOINT}/account`, { firstName, lastName, email, phoneNumber, zipCode, isDriver: true }, { headers: { token } })

export default createAccount