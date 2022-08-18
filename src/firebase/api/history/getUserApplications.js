import axios from 'axios';
import { URL_ENDPOINT } from '../info';

const getUserApplications = token => axios.get(`${URL_ENDPOINT}/history/user/requests`, { headers: { token } })

export default getUserApplications