import axios from 'axios'
import { URL_ENDPOINT } from '../info'

const updateAccount = (payload, token) => axios.post(`${URL_ENDPOINT}/account`, payload, { headers: { token } })

export default updateAccount