import {authApi} from "../API/API";

const SING_IN_TYPE = 'SING_IN_TYPE';
const SING_UP_TYPE = 'SING_UP_TYPE';
const SING_UP_UPDATE = 'SING_UP_UPDATE';
const ERROR_TYPE = 'ERROR_TYPE';
const PRELOAD_TYPE = 'PRELOAD_TYPE';
const REGISTER_TYPE = 'REGISTER_TYPE'

const signIn = (email, password) => ({
    type: SING_IN_TYPE,
    email,
    password,
})

const signUp = (email, password) => ({
    type: SING_UP_TYPE,
    email,
    password,
})

const errorSign = (error) => ({
    type: ERROR_TYPE,
    error,
})

const signUpUpdate = (email, password, confirmPassword) => ({
    type: SING_UP_UPDATE,
    email,
    password,
    confirmPassword
})

const preload = (value) => ({
    type: PRELOAD_TYPE,
    value
})

const register = (valueReg) => ({
    type : REGISTER_TYPE,
    valueReg
})

let initialState = {
    userEmail: '',
    userPassword: '',
    confirmPassword: '',
    userEmailUpdate: '',
    userPasswordUpdate: '',
    confirmPasswordUpdate: '',
    error: '',
    isPreload: false,
    isRegister: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SING_IN_TYPE: {
            return [...state];
        }
        case SING_UP_TYPE: {
            return {
                ...state,
                userEmail: state.userEmailUpdate,
                userPassword: state.userPasswordUpdate,
                confirmPassword: state.confirmPasswordUpdate,
                userEmailUpdate: '',
                userPasswordUpdate: '',
                confirmPasswordUpdate: '',
                error: '',
            }
        }
        case SING_UP_UPDATE: {
            return {
                ...state,
                userEmailUpdate: action.email,
                userPasswordUpdate: action.password,
                confirmPasswordUpdate: action.confirmPassword,
            }
        }
        case PRELOAD_TYPE: {
            return {
                ...state,
                isPreload: action.value,
            }
        }
        case REGISTER_TYPE: {
            return {
                ...state,
                isRegister: action.valueReg,
            }
        }
        case ERROR_TYPE: {
            return {
                ...state,
                error: action.error
            }
        }
        default:
            return state;
    }
}

const createUser = (email, password, passwordConfirm) => {
    return async (dispatch) => {
        dispatch(preload(true))
        if (password === passwordConfirm) {
            await authApi.createUserDb(email, password).then(() => {
                dispatch(signUp(email, password))
                dispatch(preload(false));
                dispatch(register(true));
            }).catch((error) => {
                dispatch(errorSign(error.message));
                dispatch(preload(false));
            });
        } else {
            dispatch(errorSign('Password is not right'));
            dispatch(preload(false));
        }
    }
}


export {authReducer, signIn, signUp, signUpUpdate, errorSign, createUser, register};
