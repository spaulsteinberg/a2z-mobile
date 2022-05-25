import axios from 'axios'

const updateAccount = (payload, token) => axios.post('http://192.168.1.198:3000/api/v1/account', payload, { headers: { token } })

export default updateAccount