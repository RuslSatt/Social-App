import {combineReducers, createStore} from "redux";
import {homePageReducer} from "./HomePageReducer";
import {messagePageReducer} from "./MessagePageReducer";
import {userProfileReducer} from "./UserProfileReducer";

let reducers = combineReducers({
    homePage: homePageReducer,
    messagePage: messagePageReducer,
    userProfile: userProfileReducer,
});

let store = createStore(reducers);

export {store};