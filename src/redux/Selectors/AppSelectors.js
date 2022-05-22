const getIsNavigate = (state) => {
    return state.app.isNavigate
}

const getIsAuth = (state) => {
    return state.app.isAuth
}

const getDisplayName = (state) => {
    return state.app.displayName
}

const getIsInitialize = (state) => {
    return state.app.isInitialize
}

const getIsPreload = (state) => {
    return state.app.isPreload
}

const getError = (state) => {
    return state.app.error
}

export {
    getIsNavigate,
    getIsAuth,
    getDisplayName,
    getIsInitialize,
    getIsPreload,
    getError,
}
