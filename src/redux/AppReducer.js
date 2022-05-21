import { auth } from '../data/firebase'

const GET_USER_ID = 'GET_USER_ID'
const IS_LOGIN = 'IS_LOGIN'

const getUserId = (id) => ({ type: GET_USER_ID, id })

const isLogin = (value) => ({ type: IS_LOGIN, value })

let initialState = {
    userId: null,
    isLogin: false,
    isPreload: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_LOGIN: {
            return {
                ...state,
                isLogin: action.value,
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

const initializeUser = () => {
    return (dispatch) => {
        const user = auth.currentUser
        if (user !== null) {
            dispatch(getUserId(user.uid))
            dispatch(isLogin(true))
        } else {
            dispatch(isLogin(false))
        }
    }
}

export { appReducer, initializeUser }
