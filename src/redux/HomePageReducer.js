const addCommentActionType = 'ADD-COMMENT';
const updateCommentActionType = 'UPDATE-COMMENT';

let initialState = {
    Posts: [
        {
            id: 0, name: 'Tomas', time: '1 hour ago', countComment: 20,
            countLikes: 158, countWatch: 352, title: 'Street portrait',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis risus,\n' +
                '                neque cursus risus. Eget dictumst vitae enim, felis morbi. Quis risus,\n' +
                '                neque cursus risus. Eget dictumst vitae enim, felis morbi. Quis risus,\n' +
                '                neque cursus risus.'
        },
        {id: 1, name: 'Lukas', time: '3 hour ago', countComment: 12, countLikes: 125, countWatch: 352,},
        {id: 2, name: 'Mark', time: '5 hour ago', countComment: 28, countLikes: 86, countWatch: 352,},
        {id: 3, name: 'Andrew', time: '12 hour ago', countComment: 5, countLikes: 331, countWatch: 352,},
        {id: 4, name: 'Jaden', time: '15 hour ago', countComment: 3, countLikes: 56, countWatch: 352,},
    ],
    newComment: [],
    newCommentText: '',
}

const homePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case addCommentActionType:
            const newComment = {
                id: 0,
                name: state.Posts[0].name,
                comment: state.newCommentText,
                time: state.Posts[0].time,
            }
            let stateCopy = {...state};
            stateCopy.newComment = [...state.newComment];
            stateCopy.newComment.push(newComment);
            stateCopy.newCommentText = '';
            return stateCopy;
        case updateCommentActionType:
            let stateCopySecond = {...state};
            stateCopySecond.newCommentText = action.text;
            return stateCopySecond;
        default:
            return state;
    }
}

export {homePageReducer, addCommentActionCreator, updateCommentActionCreator};

const addCommentActionCreator = () => ({
    type: addCommentActionType
});

const updateCommentActionCreator = (text) => ({
    type: updateCommentActionType,
    text: text
})