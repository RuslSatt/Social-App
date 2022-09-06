import { auth } from '../data/firebase'
import { onAuthStateChanged } from 'firebase/auth'

const ERROR_TYPE = 'APP/ERROR_TYPE'
const PRELOAD_TYPE = 'APP/PRELOAD_TYPE'
const GET_USER_ID = 'APP/GET_USER_ID'
const IS_AUTH = 'APP/IS_AUTH'
const IS_NAVIGATE = 'APP/IS_NAVIGATE'
const IS_INITIALIZE = 'APP/IS_INITIALIZE'

const getError = (error) => ({ type: ERROR_TYPE, error })

const changeIsPreload = (value) => ({ type: PRELOAD_TYPE, value })

const getUserData = (id, name) => ({ type: GET_USER_ID, id, name })

const changeIsLogin = (value) => ({ type: IS_AUTH, value })

const changeIsNavigate = (value) => ({ type: IS_NAVIGATE, value })

const changeIsInitialize = (value) => ({ type: IS_INITIALIZE, value })

let initialState = {
    userId: null,
    displayName: null,
    isAuth: false,
    isNavigate: false,
    isInitialize: false,
    isPreload: false,
    error: '',
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case ERROR_TYPE: {
            return {
                ...state,
                error: action.error,
            }
        }
        case PRELOAD_TYPE: {
            return {
                ...state,
                isPreload: action.value,
            }
        }
        case IS_AUTH: {
            return {
                ...state,
                isAuth: action.value,
            }
        }
        case IS_NAVIGATE: {
            return {
                ...state,
                isNavigate: action.value,
            }
        }
        case GET_USER_ID: {
            return {
                ...state,
                userId: action.id,
                displayName: action.name,
            }
        }
        case IS_INITIALIZE: {
            return {
                ...state,
                isInitialize: action.value,
            }
        }
        default:
            return state
    }
}

const initializeUser = () => {
    return (dispatch) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(getUserData(user.uid, user.displayName))
                dispatch(changeIsLogin(true))
                dispatch(changeIsNavigate(false))
                setTimeout(() => {
                    dispatch(changeIsInitialize(true))
                }, 2000)
            } else {
                dispatch(changeIsNavigate(true))
                setTimeout(() => {
                    dispatch(changeIsInitialize(true))
                }, 2000)
            }
        })
    }
}

export {
    appReducer,
    initializeUser,
    changeIsLogin,
    changeIsNavigate,
    getUserData,
    changeIsPreload,
    getError,
}
