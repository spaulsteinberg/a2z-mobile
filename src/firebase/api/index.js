import login from './auth/login'
import signup from './auth/signup'
import logout from './auth/logout'
import createAccount from './account/createAccount'
import getUserToken from './getUserToken'
import reauthenticateWithEmailAndPassword from './auth/reauthentication'
import { changeUserEmail, changeUserPassword, sendUserResetEmail } from './auth/updateCredentials'

export { 
    login, 
    signup, 
    logout, 
    createAccount, 
    getUserToken, 
    changeUserEmail, 
    changeUserPassword, 
    sendUserResetEmail,
    reauthenticateWithEmailAndPassword 
}