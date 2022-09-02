import {
    addMessage,
    initialState,
    messagePageReducer,
    updateMessage,
} from './MessagePageReducer'

it('message should be update', () => {
    const action = updateMessage('new message')
    const newState = messagePageReducer(initialState, action)

    expect(newState.newMessageText).toBe('new message')
})

it('message array should be increment', () => {
    const action = addMessage()
    const newState = messagePageReducer(initialState, action)

    expect(newState.newMessage.length).toBe(1)
})

it('message should be equal to newMessageText', () => {
    const action = addMessage()
    const newState = messagePageReducer(initialState, action)

    expect(newState.newMessage[0].message).toBe(initialState.newMessageText)
})
