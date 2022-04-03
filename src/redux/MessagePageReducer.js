const updateTypeMessage = 'UPDATE-MESSAGE';
const addMessage = 'ADD-MESSAGE';

const addMessageActionCreator = () => ({
    type: addMessage,
})

const updateTypeMessageActionCreator = (message) => ({
    type: updateTypeMessage,
    message: message,
})

const messagePageReducer = (state, action) => {
    switch (action.type) {
        case updateTypeMessage:
            state.newMessageText = action.message;
            return state;
        case addMessage:
            const newMessage = {
                id: 0,
                message: state.newMessageText,
                time: '2 mins ago',
            }
            state.newMessage.push(newMessage);
            state.newMessageText = '';
            return this.state;
        default:
            return state;
    }
}

export {
    messagePageReducer, updateTypeMessageActionCreator,
    addMessageActionCreator
};