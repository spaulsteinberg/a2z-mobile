import axios from 'axios'
import { URL_ENDPOINT } from '../info'

const getTickets = (token, lat, lng, radius = 25) => axios.get(`${URL_ENDPOINT}/tickets/feed?center=${lat},${lng}&radius=${radius}`, { headers: { token } })

export default getTickets