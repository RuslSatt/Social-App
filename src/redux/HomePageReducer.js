import {arrayUnion, doc, getFirestore, updateDoc} from "firebase/firestore";

const addCommentActionType = 'ADD-COMMENT';
const updateCommentActionType = 'UPDATE-COMMENT';
const postIdActionType = 'POST-ID';
const getPostAT = 'URL-IMAGE';
const setCommentAT = 'SET-COMMENT';
const updateIsFetchingAT = 'UPDATE-FETCHING'

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

const updateIsFetchingAC = (value) => ({
    type: updateIsFetchingAT,
    value: value
})

let initialState = {
    Posts: [],
    newCommentText: '',
    isFetching: false,
}

const homePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case addCommentActionType:
            let id = 0
            const createId = () => {
                state.Posts.map(elem => {
                    if (elem.open === true && elem.newComment.length > 0) {
                        id = elem.newComment.length
                    }

                })
            }
            createId();
            const newComment = {
                id: id,
                name: state.Posts[0].name,
                comment: state.newCommentText,
                time: state.Posts[0].time,
            }
            const addPostToDb = () => {
                state.Posts.map(elem => {
                    if (elem.open === true) {

                        const db = getFirestore();
                        const commentRef = doc(db, "users", elem.id);

                        updateDoc(commentRef, {
                            newComment: arrayUnion(newComment)
                        })
                    }
                })
            }
            addPostToDb();
            return {
                ...state,
                newCommentText: '',
                Posts: state.Posts.map(elem => {
                    if (elem.open === true) {
                        return {
                            ...elem, newComment: [...elem.newComment, newComment]
                        }
                    } else if (action.type === setCommentAT) {
                        return {
                            ...elem, newComment: [...elem.newComment, action.comment]
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
            const updatePostOpen = () => {
                state.Posts.map(elem => {
                    if (elem.id === action.postId) {
                        const db = getFirestore();
                        const dataOpen = doc(db, "users", elem.id);
                        updateDoc(dataOpen, {
                            open: true
                        })
                    } else {
                        const db = getFirestore();
                        const dataOpen = doc(db, "users", elem.id);
                        updateDoc(dataOpen, {
                            open: false
                        })
                    }
                })

            }
            updatePostOpen();
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
            const cleanPost = () => {
                state.Posts.length = 0;
            }
            cleanPost();
            return {
                ...state,
                Posts: [...state.Posts, action.post].flat()
            }
        case updateIsFetchingAT:
            return {
                ...state,
                isFetching: action.value
            }
        default:
            return state;
    }
}

export {
    homePageReducer,
    addCommentActionCreator,
    updateCommentActionCreator,
    postIdActionCreator,
    getPostAC,
    setCommentAC,
    updateIsFetchingAC
};
