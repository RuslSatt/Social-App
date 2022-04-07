const  userProfileType = 'NEW_SHOTS';

const userProfileCreator = () => ({
    type: userProfileType,
});

let initialState = {
    userData: {
        id: 0,
        teg: '@RusDarth',
        name: 'Ruslan',
        gps: 'Russia, Ufa',
        followers: 150,
        following: 100,
        shots: 0,
        collections: 0,
        linkWeb: '',
        linkInst: '',
        linkFace: '',
    }
}

const userProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case userProfileType:
            return {
                ...state,
            }
        default:
            return {
                ...state,
            }
    }
}

export {userProfileReducer, userProfileCreator}