import { updateEmail, updatePassword } from 'firebase/auth';
import { auth } from '../../config';

const changeUserEmail = newEmail => updateEmail(auth.currentUser, newEmail)
const changeUserPassword = newPassword => updatePassword(auth.currentUser, newPassword)

export { changeUserEmail, changeUserPassword }