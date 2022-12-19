import { authApi } from '../API/API'
import { auth } from '../data/firebase'
import {
    changeIsLogin,
    changeIsPreload,
    getError,
    getUserData,
} from './AppReducer'

const REGISTER_TYPE = 'AUTH/REGISTER_TYPE'
const GET_USER_ID = 'AUTH/GET_USER_ID'

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
    return async (dispatch) => {
        dispatch(changeIsPreload(true))
        if (password === passwordConfirm) {
            try {
                await authApi.createUserDb(email, password)
                dispatch(changeIsPreload(false))
                dispatch(changeIsRegister(true))
            } catch (error) {
                dispatch(getError(error.message))
                dispatch(changeIsPreload(false))
            }
        } else {
            dispatch(getError('Password is not right'))
            dispatch(changeIsPreload(false))
        }
    }
}

const signIn = (email, password) => {
    return async (dispatch) => {
        dispatch(changeIsPreload(true))
        try {
            await authApi.signInDb(email, password)
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
        } catch (e) {
            dispatch(getError('Not right login or password'))
            dispatch(changeIsPreload(false))
        }
    }
}

const updateUserPassword = (password) => {
    return async (dispatch) => {
        dispatch(changeIsPreload(true))
        try {
            let user = auth.currentUser
            await authApi.updateUserPassword(user, password)
            dispatch(changeIsPreload(false))
        } catch (e) {
            // dispatch(getError(error.message))
            // dispatch(changeIsPreload(false))
        }
    }
}
const resetPassword = (email) => {
    return async (dispatch) => {
        dispatch(changeIsPreload(true))
        try {
            await authApi.resetPassword(email)
        } catch (e) {}
    }
}

export {
    authReducer,
    createUser,
    changeIsRegister,
    signIn,
    updateUserPassword,
    resetPassword
}
