import axios from "axios";

const getTicketById = (token, ticketId) => axios.get(`http://192.168.1.198:3000/api/v1/tickets/${ticketId}`, { headers: { token } })

export default getTicketById