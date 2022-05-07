import {authApi} from "../API/API";

const LOG_IN_ST = 'LOG_IN_ST';
const UPDATE_FORM_SIGN_IN = 'UPDATE_FORM_SIGN_IN';
const CREATE_USER_ST = 'CREATE_USER_ST';
const UPDATE_FORM_SIGN_UP = 'UPDATE_FORM_SIGN_UP';
const ERROR_TYPE = 'ERROR_TYPE';
const PRELOAD_TYPE = 'PRELOAD_TYPE';
const REGISTER_TYPE = 'REGISTER_TYPE'
const REMOVE_TYPE = 'REMOVE_TYPE';

const logInSt = (email, password) => ({
    type: LOG_IN_ST,
    email,
    password,
})

const updateFormSignIn = (email, password) => ({
    type: UPDATE_FORM_SIGN_IN,
    email,
    password,
})

const createUserSt = () => ({
    type: CREATE_USER_ST,
})

const updateFormSignUp = (email, password, confirmPassword) => ({
    type: UPDATE_FORM_SIGN_UP,
    email,
    password,
    confirmPassword
})

const errorAuth = (error) => ({
    type: ERROR_TYPE,
    error,
})

const preload = (value) => ({
    type: PRELOAD_TYPE,
    value
})

const registerUser = (valueReg) => ({
    type: REGISTER_TYPE,
    valueReg
})

const removeData = () => ({
    type: REMOVE_TYPE,
})

let initialState = {
    userEmail: '',
    userPassword: '',
    confirmPassword: '',
    userEmailUpdate: '',
    userPasswordUpdate: '',
    confirmPasswordUpdate: '',
    isRegister: false,
    isLogIn: false,
    isPreload: false,
    error: '',
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REMOVE_TYPE: {
            return {
                ...state,
                userEmailUpdate: '',
                userPasswordUpdate: '',
                confirmPasswordUpdate: '',
                error: '',
            }
        }
        case LOG_IN_ST: {
            return {
                ...state,
                userEmail: state.userEmailUpdate,
                userPassword: state.userPasswordUpdate,
                userEmailUpdate: '',
                userPasswordUpdate: '',
                error: '',
            }
        }
        case UPDATE_FORM_SIGN_IN: {
            return {
                ...state,
                userEmailUpdate: action.email,
                userPasswordUpdate: action.password,
            }
        }
        case CREATE_USER_ST: {
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
        case UPDATE_FORM_SIGN_UP: {
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
                dispatch(createUserSt());
                dispatch(preload(false));
                dispatch(registerUser(true));
            }).catch((error) => {
                dispatch(errorAuth(error.message));
                dispatch(preload(false));
            });
        } else {
            dispatch(errorAuth('Password is not right'));
            dispatch(preload(false));
        }
    }
}


export {authReducer, updateFormSignUp, createUser, registerUser, removeData, updateFormSignIn};
