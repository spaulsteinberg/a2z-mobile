import axios from 'axios'

const getTickets = token => axios.get("http://192.168.1.198:3000/api/v1/tickets", { headers: { token } })

export default getTickets