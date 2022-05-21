import { authApi } from '../API/API'
import { auth } from '../data/firebase'

const ERROR_TYPE = 'ERROR_TYPE'
const PRELOAD_TYPE = 'PRELOAD_TYPE'
const REGISTER_TYPE = 'REGISTER_TYPE'
const GET_USER_ID = 'GET_USER_ID'

const errorAuth = (error) => ({ type: ERROR_TYPE, error })

const preload = (value) => ({ type: PRELOAD_TYPE, value })

const registerUser = (valueReg) => ({ type: REGISTER_TYPE, valueReg })

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
        dispatch(preload(true))
        if (password === passwordConfirm) {
            await authApi
                .createUserDb(email, password)
                .then(() => {
                    dispatch(preload(false))
                    dispatch(registerUser(true))
                })
                .catch((error) => {
                    dispatch(errorAuth(error.message))
                    dispatch(preload(false))
                })
        } else {
            dispatch(errorAuth('Password is not right'))
            dispatch(preload(false))
        }
    }
}

const signIn = (email, password) => {
    return async (dispatch) => {
        dispatch(preload(true))
        await authApi
            .signInDb(email, password)
            .then(() => {
                const user = auth.currentUser
                if (user) {
                    dispatch(getUserId(user.uid))
                    dispatch(preload(false))
                } else {
                    dispatch(errorAuth('No user is signed in.'))
                    dispatch(preload(false))
                }
            })
            .catch(() => {
                dispatch(errorAuth('Not right login or password'))
                dispatch(preload(false))
            })
    }
}

export { authReducer, createUser, registerUser, signIn, preload }
