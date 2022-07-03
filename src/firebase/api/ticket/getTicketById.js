import axios from "axios";
import { URL_ENDPOINT } from "../info";

const getTicketById = (token, ticketId) => axios.get(`${URL_ENDPOINT}/tickets/${ticketId}`, { headers: { token } })

export default getTicketById