import axios from "axios";
import { URL_ENDPOINT } from "../info";

const postUserTicketInquiry = (token, ticketId) => axios.post(`${URL_ENDPOINT}/history/id/${ticketId}`, {}, { headers: { token } })

export default postUserTicketInquiry