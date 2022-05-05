import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";


export const createUserAPI = (email, password) => {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password)
}
