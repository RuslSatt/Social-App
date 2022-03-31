let store = {
    _state: {
        HomePage: {
            Posts: [
                {id: 0, name: 'Tomas', time: '1 hour ago', countComment: 20, countLikes: 158,},
                {id: 1, name: 'Lukas', time: '3 hour ago', countComment: 12, countLikes: 125,},
                {id: 2, name: 'Mark', time: '5 hour ago', countComment: 28, countLikes: 86,},
                {id: 3, name: 'Andrew', time: '12 hour ago', countComment: 5, countLikes: 331,},
                {id: 4, name: 'Jaden', time: '15 hour ago', countComment: 3, countLikes: 56,},
            ]
        }
    },
    _render() {

    },
    subscribe(observer) {
        this._render = observer;
    },
    getState() {
        return this._state;
    }
}

export {store};