const  userProfileType = 'NEW_SHOTS';

const userProfileCreator = () => ({
    type: userProfileType,
});

let initialState = {
    userData: {
        id: 0,
        tag: '@RusDarth',
        name: 'Ruslan',
        location: 'Russia, Ufa',
        followers: 150,
        following: 100,
        shots: [
        ],
        collections: [

        ],
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