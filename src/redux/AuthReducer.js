import {authApi} from "../API/API";
import {auth} from '../data/firebase';

const ADD_FORM_SIGN_IN = 'ADD_FORM_SIGN_IN';
const UPDATE_FORM_SIGN_IN = 'UPDATE_FORM_SIGN_IN';
const ADD_FORM_SIGN_UP = 'ADD_FORM_SIGN_UP';
const UPDATE_FORM_SIGN_UP = 'UPDATE_FORM_SIGN_UP';
const ERROR_TYPE = 'ERROR_TYPE';
const PRELOAD_TYPE = 'PRELOAD_TYPE';
const REGISTER_TYPE = 'REGISTER_TYPE'
const REMOVE_TYPE = 'REMOVE_TYPE';
const GET_USER_ID = 'GET_USER_ID';

const addFormSignIn = () => ({type: ADD_FORM_SIGN_IN,})

const updateFormSignIn = (email, password) => ({type: UPDATE_FORM_SIGN_IN, email, password,})

const addFormSignUp = () => ({type: ADD_FORM_SIGN_UP,})

const updateFormSignUp = (email, password, confirmPassword) => ({
    type: UPDATE_FORM_SIGN_UP,
    email,
    password,
    confirmPassword
})

const errorAuth = (error) => ({type: ERROR_TYPE, error,})

const preload = (value) => ({type: PRELOAD_TYPE, value})

const registerUser = (valueReg) => ({type: REGISTER_TYPE, valueReg})

const cleanForm = () => ({type: REMOVE_TYPE,})

const getUserId = (id) => ({type: GET_USER_ID, id})

let initialState = {
    userId: null,
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
        case ADD_FORM_SIGN_IN: {
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
        case ADD_FORM_SIGN_UP: {
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
        case GET_USER_ID: {
            debugger
            return {
                ...state,
                userId: action.id,
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
                dispatch(addFormSignUp());
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

const signIn = (email, password) => {
    return async (dispatch) => {
        dispatch(preload(true))
        await authApi.signInDb(email, password).then(() => {
            dispatch(addFormSignIn());
            const user = auth.currentUser;
            if (user) {
                dispatch(getUserId(user.uid))
                dispatch(preload(false));
            } else {
                dispatch(errorAuth('No user is signed in.'));
                dispatch(preload(false));
            }
        }).catch(() => {
            dispatch(errorAuth('Not right login or password'));
            dispatch(preload(false));
        });

    }
}

export {authReducer, updateFormSignUp, createUser, registerUser, cleanForm, updateFormSignIn, signIn};
