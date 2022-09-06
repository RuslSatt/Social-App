import { postApi } from '../API/API'

const addCommentAT = 'ADD-COMMENT'
const setPostAT = 'URL-IMAGE'
const setCommentAT = 'SET-COMMENT'
const updateFetchingAT = 'UPDATE-FETCHING'
const CREATE_COMMENT = 'CREATE_COMMENT'

const createComment = (postId, text) => ({
    type: CREATE_COMMENT,
    postId,
    text,
})

const addComment = (postId, createdComment) => ({
    type: addCommentAT,
    postId,
    createdComment,
})

const setComment = (comments) => ({
    type: setCommentAT,
    comments,
})

const setPost = (post) => ({
    type: setPostAT,
    post,
})

const updateFetching = (value) => ({
    type: updateFetchingAT,
    value,
})

let initialState = {
    Posts: [],
    isFetching: false,
    createdComment: '',
}

const homePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_COMMENT: {
            let id = 0
            const createId = () => {
                state.Posts.map((elem) => {
                    if (
                        elem.id === action.postId &&
                        elem.newComment.length > 0
                    ) {
                        id = elem.newComment.length
                    }
                })
            }
            createId()
            const newComment = {
                id: id,
                name: state.Posts[0].name,
                comment: action.text,
                time: state.Posts[0].time,
            }
            return {
                ...state,
                createdComment: newComment,
            }
        }
        case addCommentAT:
            return {
                ...state,
                Posts: state.Posts.map((elem) => {
                    if (elem.id === action.postId) {
                        return {
                            ...elem,
                            newComment: [
                                ...elem.newComment,
                                action.createdComment,
                            ],
                        }
                    } else if (action.type === setCommentAT) {
                        return {
                            ...elem,
                            newComment: [...elem.newComment, action.comment],
                        }
                    } else {
                        return elem
                    }
                }),
            }
        case setPostAT:
            const cleanPost = () => {
                state.Posts.length = 0
            }
            cleanPost()
            return {
                ...state,
                Posts: [...state.Posts, action.post].flat(),
            }
        case updateFetchingAT:
            return {
                ...state,
                isFetching: action.value,
            }
        default:
            return state
    }
}

const getPosts = () => {
    return async (dispatch) => {
        dispatch(updateFetching(true))
        const data = await postApi.getPostsDb()
        dispatch(
            setPost(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        )
        dispatch(updateFetching(false))
    }
}

const getCommentPosts = (elem) => {
    return async (dispatch) => {
        const comments = await postApi.getCommentPostsDb(elem)
        dispatch(setComment(comments))
    }
}

const addNewComment = (elem, postId, createdComment) => {
    return async (dispatch) => {
        await postApi.addCommentPostsDb(elem, createdComment)
        dispatch(addComment(postId, createdComment))
    }
}

export {
    homePageReducer,
    addComment,
    setPost,
    setComment,
    updateFetching,
    getPosts,
    getCommentPosts,
    createComment,
    addNewComment,
}
