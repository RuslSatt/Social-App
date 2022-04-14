import {addMessageActionCreator, updateTypeMessageActionCreator} from "../../../../redux/MessagePageReducer";
import {TypeMessage} from "./TypeMessage";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        newMessageText: state.messagePage.newMessageText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateMessage: (message) => {
            dispatch(updateTypeMessageActionCreator(message));
        },
        addMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
}

const TypeMessageContainer = connect(mapStateToProps, mapDispatchToProps)(TypeMessage);

export {TypeMessageContainer};
