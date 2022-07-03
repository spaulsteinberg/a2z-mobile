import axios from 'axios';
import { URL_ENDPOINT } from '../info';

const uploadProfilePhoto = (payload, token) => axios.post(`${URL_ENDPOINT}/account/profile/picture`, payload, { headers: { token, "Content-Type": "multipart/form-data" } })

export default uploadProfilePhoto