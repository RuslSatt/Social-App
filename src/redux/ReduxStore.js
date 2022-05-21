import { applyMiddleware, combineReducers, createStore } from 'redux'
import { homePageReducer } from './HomePageReducer'
import { messagePageReducer } from './MessagePageReducer'
import { userProfileReducer } from './UserProfileReducer'
import { authReducer } from './AuthReducer'
import thunkMiddleware from 'redux-thunk'
import { appReducer } from './AppReducer'

let reducers = combineReducers({
    homePage: homePageReducer,
    messagePage: messagePageReducer,
    userProfile: userProfileReducer,
    auth: authReducer,
    app: appReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export { store }
