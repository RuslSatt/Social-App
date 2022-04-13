import AvatarOne from '../assets/images/posts/Post-4.png';
import AvatarTwo from '../assets/images/posts/Post-3.png';
import AvatarThree from '../assets/images/posts/Post-2.png';
import AvatarFour from '../assets/images/posts/Post-1.png';
import AvatarFive from '../assets/images/posts/Post-6.png';
import PostOne from '../assets/images/posts/Post-1.png';
import PostTwo from '../assets/images/posts/Post-2.png';
import PostThree from '../assets/images/posts/Post-3.png';
import PostFour from '../assets/images/posts/Post-4.png';
import PostFive from '../assets/images/posts/Post-5.png';

const addCommentActionType = 'ADD-COMMENT';
const updateCommentActionType = 'UPDATE-COMMENT';
const postIdActionType = 'POST-ID'

const addCommentActionCreator = () => ({
    type: addCommentActionType
});

const updateCommentActionCreator = (text) => ({
    type: updateCommentActionType,
    text: text
})

const postIdActionCreator = (postId) => ({
    type: postIdActionType,
    postId: postId,
});

let initialState = {
    Posts: [
        {
            open: false,
            id: 0,
            avatar: AvatarOne,
            poster: PostOne,
            name: 'Tomas',
            time: '1 hour ago',
            countComment: 20,
            countLikes: 158,
            countWatch: 352,
            title: 'Street portrait',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis risus,\n' +
                '                neque cursus risus. Eget dictumst vitae enim, felis morbi. Quis risus,\n' +
                '                neque cursus risus. Eget dictumst vitae enim, felis morbi. Quis risus,\n' +
                '                neque cursus risus.',
        },
        {
            open: false,
            id: 1,
            avatar: AvatarTwo,
            poster: PostTwo,
            name: 'Lukas',
            time: '3 hour ago',
            countComment: 12,
            countLikes: 125,
            countWatch: 352,
            title: 'Street portrait',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis risus,\n' +
                '                neque.'
        },
        {
            open: false,
            id: 2,
            avatar: AvatarThree,
            poster: PostThree,
            name: 'Mark',
            time: '5 hour ago',
            countComment: 28,
            countLikes: 86,
            countWatch: 352,
            title: 'Street portrait',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis risus,\n' +
                '                neque cursus risus. Eget dictumst vitae enim, felis morbi. Quis risus,\n' +
                '                neque cursus risus. Eget dictumst vitae enim, felis morbi. Quis risus,\n' +
                '                neque cursus risus.'
        },
        {
            open: false,
            id: 3,
            avatar: AvatarFour,
            poster: PostFour,
            name: 'Andrew',
            time: '12 hour ago',
            countComment: 5,
            countLikes: 331,
            countWatch: 352,
            title: 'Street portrait',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis risus,\n' +
                '                neque cursus risus. Eget dictumst vitae enim, felis morbi. Quis risus,\n' +
                '                neque cursus risus. Eget dictumst vitae enim, felis morbi. Quis risus,\n' +
                '                neque cursus risus.'
        },
        {
            open: false,
            id: 4,
            avatar: AvatarFive,
            poster: PostFive,
            name: 'Jaden',
            time: '15 hour ago',
            countComment: 3,
            countLikes: 56,
            countWatch: 352,
            title: 'Street portrait',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis risus,\n' +
                '                neque cursus risus. Eget dictumst vitae enim, felis morbi. Quis risus,\n' +
                '                neque cursus risus. Eget dictumst vitae enim, felis morbi. Quis risus,\n' +
                '                neque cursus risus.'
        },
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
            return {
                ...state,
                newCommentText: '',
                newComment: [...state.newComment, newComment],
            }
        case updateCommentActionType:
            return {
                ...state,
                newCommentText: action.text,
            }
        case postIdActionType:
            return {
                ...state,
                Posts: state.Posts.map(elem => {
                    if (elem.id === action.postId) {
                        return {
                            ...elem, open: true
                        }
                    } else {
                        return {
                            ...elem, open: false
                        }
                    }
                }),
            }
        default:
            return state;
    }
}

export {homePageReducer, addCommentActionCreator, updateCommentActionCreator, postIdActionCreator};