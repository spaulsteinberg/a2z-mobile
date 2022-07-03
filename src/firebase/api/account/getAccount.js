import axios from 'axios';
import { URL_ENDPOINT } from '../info';

const getAccount = token => axios.get(`${URL_ENDPOINT}/account`, { headers: { token } })

export default getAccount