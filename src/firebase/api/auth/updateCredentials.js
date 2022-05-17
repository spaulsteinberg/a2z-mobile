import {  
    updateEmail,
} from 'firebase/auth';
import { auth } from '../../config';

export const changeUserEmail = newEmail => updateEmail(auth.currentUser, newEmail)