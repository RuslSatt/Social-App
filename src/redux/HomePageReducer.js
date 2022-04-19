import {arrayUnion, doc, getFirestore, updateDoc} from "firebase/firestore";

const addCommentAT = 'ADD-COMMENT';
const updateTextForCommentAT = 'UPDATE-COMMENT';
const getPostIdAT = 'POST-ID';
const setPostAT = 'URL-IMAGE';
const setCommentAT = 'SET-COMMENT';
const updateFetchingAT = 'UPDATE-FETCHING'

const addComment = () => ({
    type: addCommentAT
});

const setComment = (comments) => ({
    type: setCommentAT,
    comments
});

const updateTextForComment = (text) => ({
    type: updateTextForCommentAT,
    text
});

const setPost = (post) => ({
    type: setPostAT,
    post
});

const getPostId = (postId) => ({
    type: getPostIdAT,
    postId
});

const updateFetching = (value) => ({
    type: updateFetchingAT,
    value
})

let initialState = {
    Posts: [],
    newCommentText: '',
    isFetching: false,
}

const homePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case addCommentAT:
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
        case updateTextForCommentAT:
            return {
                ...state,
                newCommentText: action.text,
            }
        case getPostIdAT:
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
        case setPostAT:
            const cleanPost = () => {
                state.Posts.length = 0;
            }
            cleanPost();
            return {
                ...state,
                Posts: [...state.Posts, action.post].flat()
            }
        case updateFetchingAT:
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
    addComment,
    updateTextForComment,
    getPostId,
    setPost,
    setComment,
    updateFetching
};
