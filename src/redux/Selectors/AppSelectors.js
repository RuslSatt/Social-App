const getIsNavigate = (state) => {
    return state.app.isNavigate
}

const getIsAuth = (state) => {
    return state.app.isAuth
}

const getDisplayName = (state) => {
    return state.app.displayName
}

export { getIsNavigate, getIsAuth, getDisplayName }
