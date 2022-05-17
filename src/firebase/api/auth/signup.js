import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config";

const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password)

export default signup