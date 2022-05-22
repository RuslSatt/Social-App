import { auth } from '../data/firebase'
import { onAuthStateChanged } from 'firebase/auth'

const GET_USER_ID = 'GET_USER_ID'
const IS_AUTH = 'IS_AUTH'
const IS_NAVIGATE = 'IS_NAVIGATE'
const IS_INITIALIZE = 'IS_INITIALIZE'

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
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
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
}
