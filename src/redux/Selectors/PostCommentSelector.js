const getPostsSt = (state) => {
    return state.homePage.Posts
}

const getCreatedComment = (state) => {
    return state.homePage.createdComment
}

export { getPostsSt, getCreatedComment }
