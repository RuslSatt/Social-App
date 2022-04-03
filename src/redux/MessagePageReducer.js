const updateTypeMessage = 'UPDATE-MESSAGE';
const addMessage = 'ADD-MESSAGE';

let initialState = {
    Message: [
        {id: 0, name: 'Tomas', time: '10 mins ago', countMessage: 20,
            textMessage: 'Hello, I really like your photo about...'
        },
        {id: 1, name: 'Tomas', time: '13 mins ago', countMessage: 65,
            textMessage: 'Hello, I really like your photo about...'
        },
        {id: 2, name: 'Tomas', time: '25 mins ago', countMessage: 125,
            textMessage: 'Hello, I really like your photo about...'
        },
        {id: 3, name: 'Tomas', time: '30 mins ago', countMessage: 1135,
            textMessage: 'Hello, I really like your photo about...'
        },
        {id: 4, name: 'Tomas', time: '1 hour ago', countMessage: 9,
            textMessage: 'Hello, I really like your photo about...'
        },
        {id: 5, name: 'Tomas', time: '1 hour ago', countMessage: 9,
            textMessage: 'Hello, I really like your photo about...'
        },
        {id: 6, name: 'Tomas', time: '1 hour ago', countMessage: 9,
            textMessage: 'Hello, I really like your photo about...'
        },
    ],
    newMessageText: '',
    newMessage: [],
}

const messagePageReducer = (state = initialState, action) => {
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
            return state;
        default:
            return state;
    }
}

export {
    messagePageReducer, updateTypeMessageActionCreator,
    addMessageActionCreator
};

const addMessageActionCreator = () => ({
    type: addMessage,
})

const updateTypeMessageActionCreator = (message) => ({
    type: updateTypeMessage,
    message: message,
})