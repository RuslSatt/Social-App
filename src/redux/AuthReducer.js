import { authApi } from '../API/API'
import { auth } from '../data/firebase'
import { changeIsLogin, getUserData } from './AppReducer'

const ERROR_TYPE = 'ERROR_TYPE'
const PRELOAD_TYPE = 'PRELOAD_TYPE'
const REGISTER_TYPE = 'REGISTER_TYPE'
const GET_USER_ID = 'GET_USER_ID'

const getError = (error) => ({ type: ERROR_TYPE, error })

const changeIsPreload = (value) => ({ type: PRELOAD_TYPE, value })

const changeIsRegister = (valueReg) => ({ type: REGISTER_TYPE, valueReg })

const getUserId = (id) => ({ type: GET_USER_ID, id })

let initialState = {
    userId: null,
    isRegister: false,
    isPreload: false,
    error: '',
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
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
            return {
                ...state,
                userId: action.id,
            }
        }
        case ERROR_TYPE: {
            return {
                ...state,
                error: action.error,
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
            await authApi
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
    return async (dispatch) => {
        dispatch(changeIsPreload(true))
        await authApi
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

export { authReducer, createUser, changeIsRegister, signIn, changeIsPreload }
