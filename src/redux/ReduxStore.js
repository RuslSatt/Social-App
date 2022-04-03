import {combineReducers, createStore} from "redux";
import {homePageReducer} from "./HomePageReducer";
import {messagePageReducer} from "./MessagePageReducer";

let reducers = combineReducers({
    homePage: homePageReducer,
    messagePage: messagePageReducer,
});

let store = createStore(reducers);

export {store};