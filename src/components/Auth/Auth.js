import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";


export const createUser = (email, password) => {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password)
}
