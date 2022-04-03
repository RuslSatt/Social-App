const addCommentActionType = 'ADD-COMMENT';
const updateCommentActionType = 'UPDATE-COMMENT';

const addCommentActionCreator = () => ({
    type: addCommentActionType
});

const updateCommentActionCreator = (text) => ({
    type: updateCommentActionType,
    text: text
})

const homePageReducer = (state, action) => {
    switch (action.type) {
        case addCommentActionType:
            const newComment = {
                id: 0,
                name: state.Posts[0].name,
                comment: state.newCommentText,
                time: state.Posts[0].time,
            }
            state.newComment.push(newComment);
            state.newCommentText = '';
            return state;
        case updateCommentActionType:
            state.newCommentText = action.text;
            return state;
        default:
            return state;
    }
}

export {homePageReducer, addCommentActionCreator, updateCommentActionCreator};