const addCommentActionType = 'ADD-COMMENT';
const updateCommentActionType = 'UPDATE-COMMENT';

let store = {
    _state: {
        HomePage: {
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
            dataComments: []
        },
        newTextComment: '',
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
        if (action.type === addCommentActionType) {
            const newComment = {
                id: 0,
                name: this._state.HomePage.Posts[0].name,
                comment: this._state.newTextComment,
                time: this._state.HomePage.Posts[0].time,
            }
            this._state.HomePage.dataComments.push(newComment);
            this._state.newTextComment = '';
            this._render(this._state);
        } else if (action.type === updateCommentActionType) {
            this._state.newTextComment = action.text;
            this._render(this._state)
        }
    }
}

const addCommentActionCreator = () => ({
    type: addCommentActionType
});

const updateCommentActionCreator = (text) => ({
    type: updateCommentActionType,
    text: text
})


export {store, addCommentActionCreator, updateCommentActionCreator};