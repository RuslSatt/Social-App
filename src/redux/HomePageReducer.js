import {arrayUnion, doc, getFirestore, updateDoc} from "firebase/firestore";

const addCommentActionType = 'ADD-COMMENT';
const updateCommentActionType = 'UPDATE-COMMENT';
const postIdActionType = 'POST-ID';
const getPostAT = 'URL-IMAGE';
const setCommentAT = 'SET-COMMENT'

const addCommentActionCreator = () => ({
    type: addCommentActionType
});

const updateCommentActionCreator = (text) => ({
    type: updateCommentActionType,
    text: text
});

const postIdActionCreator = (postId) => ({
    type: postIdActionType,
    postId: postId,
});

const getPostAC = (post) => ({
    type: getPostAT,
    post: post,
});

const setCommentAC = (comment) => ({
    type: setCommentAT,
    comment: comment,
});

let initialState = {
    Posts: [
        // {
        //     open: false,
        //     id: 1,
        //     avatar: AvatarTwo,
        //     poster: PostTwo,
        //     name: 'Lukas',
        //     time: '3 hour ago',
        //     countComment: 12,
        //     countLikes: 125,
        //     countWatch: 352,
        //     title: 'Street portrait',
        //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis risus,\n' +
        //         '                neque.',
        //     newComment: [],
        // },
    ],
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
            state.Posts.map (elem => {
                if (elem.open === true) {
                    const db = getFirestore();
                    const commentRef = doc(db, "users", "ZjcJsvXX2pqK9cbqNDuQ");

                    updateDoc(commentRef, {
                        newComment: arrayUnion(newComment)
                    })
                }
            })
            return {
                ...state,
                newCommentText: '',
                Posts: state.Posts.map(elem => {
                    if (elem.open === true) {
                        return {
                            ...elem, newComment: [...elem.newComment, newComment]
                        }
                    } else {
                        return elem;
                    }
                })
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
        case getPostAT:
            const addPost = () => {
                state.Posts.map(elem => {
                    if (elem.id === action.post.id) {
                        state.Posts.splice(elem.id);
                    }
                })
            }
            addPost();
            return {
                ...state,
                Posts: [...state.Posts, action.post]
            }

        case setCommentAT:
            return {
                ...state,
                Posts: state.Posts.map(elem => {
                    if (elem.open === true) {
                        return {
                            ...elem, newComment: [...elem.newComment, action.comment]
                        }
                    } else {
                        return elem;
                    }
                })
            }
        default:
            return state;
    }
}

export {homePageReducer, addCommentActionCreator, updateCommentActionCreator, postIdActionCreator, getPostAC, setCommentAC};
