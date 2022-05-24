import axios from 'axios'

const updateAccount = (payload, token) => axios.post('http://127.0.0.1:3000/api/v1/account', payload, { headers: { token } })

export default updateAccount