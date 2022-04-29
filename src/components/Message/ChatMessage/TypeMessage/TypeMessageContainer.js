import {addMessage, updateMessage} from "../../../../redux/MessagePageReducer";
import {TypeMessage} from "./TypeMessage";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        newMessageText: state.messagePage.newMessageText,
    }
}

const TypeMessageContainer = connect(mapStateToProps,
    {
        updateMessage,
        addMessage,
    })(TypeMessage);

export {TypeMessageContainer};
