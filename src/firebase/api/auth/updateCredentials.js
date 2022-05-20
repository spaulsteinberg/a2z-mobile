import { updateEmail, updatePassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../config';

const changeUserEmail = newEmail => updateEmail(auth.currentUser, newEmail)
const changeUserPassword = newPassword => updatePassword(auth.currentUser, newPassword)
const sendUserResetEmail = email => sendPasswordResetEmail(auth, email)

export { changeUserEmail, changeUserPassword, sendUserResetEmail }