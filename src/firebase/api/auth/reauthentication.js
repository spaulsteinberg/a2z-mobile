import { reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth"
import { auth } from "../../config"

// reauthenticate with an email/password credential.
const reauthenticateWithEmailAndPassword = password => new Promise((resolve, reject) => {
    reauthenticateWithCredential(auth.currentUser, EmailAuthProvider.credential(auth.currentUser.email, password))
        .then(() => resolve("true"))
        .catch(err => {
            reject("Call to authenticate user failed.")
        })
})

export default reauthenticateWithEmailAndPassword