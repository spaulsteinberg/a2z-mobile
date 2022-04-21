import {  
    signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../config';

const login = (email, password) => signInWithEmailAndPassword(auth, email, password)

export default login