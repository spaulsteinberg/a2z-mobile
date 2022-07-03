import axios from "axios";
import { URL_ENDPOINT } from "../info";

const getUserApplicationStatus = (token, ticketId) => axios.get(`${URL_ENDPOINT}/history/${ticketId}`, { headers: { token } })

export default getUserApplicationStatus