import axios from 'axios';

const uploadProfilePhoto = (payload, token) => axios.post('http://192.168.1.198:3000/api/v1/account/profile/picture', payload, { headers: { token, "Content-Type": "multipart/form-data" } })

export default uploadProfilePhoto