const SING_IN_TYPE = 'SING_IN_TYPE';
const SING_UP_TYPE = 'SING_UP_TYPE';
const SING_UP_UPDATE = 'SING_UP_UPDATE'
const ERROR_TYPE = 'ERROR_TYPE'

const signIn = (email, password) => ({
    type: SING_IN_TYPE,
    email,
    password,
})

const signUp = (email, password) => ({
    type: SING_UP_TYPE,
    email,
    password,
})

const errorSign = (error) => ({
    type: ERROR_TYPE,
    error,
})

const signUpUpdate = (email, password, confirmPassword) => ({
    type: SING_UP_UPDATE,
    email,
    password,
    confirmPassword
})

let initialState = {
    userEmail: '',
    userPassword: '',
    confirmPassword: '',
    userEmailUpdate: '',
    userPasswordUpdate: '',
    confirmPasswordUpdate: '',
    error: '',
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SING_IN_TYPE: {
            return [...state];
        }
        case SING_UP_TYPE: {
            return {
                ...state,
                userEmail: state.userEmailUpdate,
                userPassword: state.userPasswordUpdate,
                confirmPassword: state.confirmPasswordUpdate,
                userEmailUpdate: '',
                userPasswordUpdate: '',
                confirmPasswordUpdate: '',
            }
        }
        case SING_UP_UPDATE: {
            return {
                ...state,
                userEmailUpdate: action.email,
                userPasswordUpdate: action.password,
                confirmPasswordUpdate: action.confirmPassword,
            }
        }
        case ERROR_TYPE: {
            return {
                ...state,
                error: action.error
            }
        }
        default:
            return state;
    }
}

export {authReducer, signIn, signUp, signUpUpdate, errorSign};
