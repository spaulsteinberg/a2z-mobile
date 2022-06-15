import axios from "axios";

const postUserTicketInquiry = (token, ticketId) => axios.post(`http://192.168.1.198:3000/api/v1/history/${ticketId}`, {}, { headers: { token } })

export default postUserTicketInquiry