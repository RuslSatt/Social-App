import { authApi } from '../API/API'
import { auth } from '../data/firebase'
import {
    changeIsLogin,
    changeIsPreload,
    getError,
    getUserData,
} from './AppReducer'

const REGISTER_TYPE = 'REGISTER_TYPE'
const GET_USER_ID = 'GET_USER_ID'

const changeIsRegister = (valueReg) => ({ type: REGISTER_TYPE, valueReg })

const getUserId = (id) => ({ type: GET_USER_ID, id })

let initialState = {
    userId: null,
    isRegister: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_TYPE: {
            return {
                ...state,
                isRegister: action.valueReg,
            }
        }
        case GET_USER_ID: {
            return {
                ...state,
                userId: action.id,
            }
        }
        default:
            return state
    }
}

const createUser = (email, password, passwordConfirm) => {
    return (dispatch) => {
        dispatch(changeIsPreload(true))
        if (password === passwordConfirm) {
            authApi
                .createUserDb(email, password)
                .then(() => {
                    dispatch(changeIsPreload(false))
                    dispatch(changeIsRegister(true))
                })
                .catch((error) => {
                    dispatch(getError(error.message))
                    dispatch(changeIsPreload(false))
                })
        } else {
            dispatch(getError('Password is not right'))
            dispatch(changeIsPreload(false))
        }
    }
}

const signIn = (email, password) => {
    return (dispatch) => {
        dispatch(changeIsPreload(true))
        authApi
            .signInDb(email, password)
            .then(() => {
                const user = auth.currentUser
                if (user) {
                    dispatch(getUserId(user.uid))
                    dispatch(getUserData(user.uid, user.displayName))
                    dispatch(changeIsLogin(true))
                    dispatch(changeIsPreload(false))
                } else {
                    dispatch(getError('No user is signed in.'))
                    dispatch(changeIsPreload(false))
                }
            })
            .catch(() => {
                dispatch(getError('Not right login or password'))
                dispatch(changeIsPreload(false))
            })
    }
}

const updateUserPassword = (password) => {
    return (dispatch) => {
        dispatch(changeIsPreload(true))
        let user = auth.currentUser
        authApi
            .updateUserPassword(user, password)
            .then(() => {
                dispatch(changeIsPreload(false))
            })
            .catch((error) => {
                dispatch(getError(error.message))
                dispatch(changeIsPreload(false))
            })
    }
}
const resetPassword = (email) => {
    return (dispatch) => {
        dispatch(changeIsPreload(true))
        authApi
            .resetPassword(email)
            .then(() => {})
            .catch(() => {})
    }
}

export {
    authReducer,
    createUser,
    changeIsRegister,
    signIn,
    updateUserPassword,
    resetPassword,
}
