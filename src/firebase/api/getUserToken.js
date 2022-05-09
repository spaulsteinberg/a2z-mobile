import { auth } from "../config"
import { getIdToken } from 'firebase/auth';


const getUserToken = async () => {
    try {
        return await getIdToken(auth.currentUser)
    } catch(err) {
        throw new Error("Token call failed.") 
    }
}

export default getUserToken