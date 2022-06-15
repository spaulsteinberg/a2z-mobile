import axios from "axios";

const getUserApplicationStatus = (token, ticketId) => axios.get(`http://192.168.1.198:3000/api/v1/history/${ticketId}`, { headers: { token } })

export default getUserApplicationStatus