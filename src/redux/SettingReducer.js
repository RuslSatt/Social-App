import { authApi } from '../API/API'
import { changeIsLogin, changeIsNavigate } from './AppReducer'

const PRELOAD_TYPE = 'SETTING/PRELOAD_TYPE'
const ERROR_TYPE = 'SETTING/ERROR_TYPE'

const getError = (error) => ({ type: ERROR_TYPE, error })

const changeIsPreload = (value) => ({ type: PRELOAD_TYPE, value })

let initialState = {
    error: '',
    isPreload: false,
}

const settingReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRELOAD_TYPE: {
            return {
                ...state,
                isPreload: action.value,
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

const signOut = () => {
    return async (dispatch) => {
        dispatch(changeIsPreload(true))
        try {
            await authApi.signOut()
            dispatch(changeIsLogin(false))
            dispatch(changeIsNavigate(true))
            dispatch(changeIsPreload(false))
        } catch (e) {
            dispatch(getError(error.value))
            dispatch(changeIsPreload(false))
        }
    }
}

export { settingReducer, signOut }
