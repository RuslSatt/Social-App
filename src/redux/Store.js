import {homePageReducer} from "./HomePageReducer";
import {messagePageReducer} from "./MessagePageReducer";


let store = {
    _state: {
        homePage: {

        },
        messagePage: {

        }
    },
    _render() {

    },
    subscribe(observer) {
        this._render = observer;
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        this._state.homePage = homePageReducer(this._state.homePage, action);
        this._state.messagePage = messagePageReducer(this._state.messagePage, action);
        this._render(this._state);
    }
}

export {store};