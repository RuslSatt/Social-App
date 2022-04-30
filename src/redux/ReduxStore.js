import {combineReducers, createStore} from "redux";
import {homePageReducer} from "./HomePageReducer";
import {messagePageReducer} from "./MessagePageReducer";
import {userProfileReducer} from "./UserProfileReducer";
import {authReducer} from "./AuthReducer";

let reducers = combineReducers({
    homePage: homePageReducer,
    messagePage: messagePageReducer,
    userProfile: userProfileReducer,
    auth: authReducer,
});

let store = createStore(reducers);

export {store};
