import axios from "axios"
import { URL_ENDPOINT } from "../../firebase/api/info"

const getDirections = 
    (token, ticketId, startPlaceId, endPlaceId) => 
        axios.post(`${URL_ENDPOINT}/tickets/${ticketId}/route`, { startPlaceId, endPlaceId}, { headers: { token } })

export default getDirections