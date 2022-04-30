import {getAuth} from "firebase/auth";


const singInType = 'SING_IN_TYPE';

const singIn = (email, password) => ({
    type: singInType,
    email,
    password,
})

let initialState = {
    user: []
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case singInType: {
            const auth = getAuth();
            auth.createUserWithEmailAndPassword(action.email, action.password).then();
            return [...state];
        }
        default:
            return state;
    }
}

export {authReducer, singIn};
