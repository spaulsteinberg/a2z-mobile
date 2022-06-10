import axios from 'axios'

const getTickets = (token, lat, lng, radius = 25) => axios.get(`http://192.168.1.198:3000/api/v1/tickets/feed?center=${lat},${lng}&radius=${radius}`, { headers: { token } })

export default getTickets