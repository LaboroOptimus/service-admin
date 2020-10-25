const initialState = {
    email: '',
    pass: '',
    error: false,
    login: false,
    errorMessage: '',
};

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_EMAIL':

            return {
                ...state,
                email: action.payload,
            };
        case 'CHANGE_PASS':
            return {
                ...state,
                pass: action.payload
            };
        case 'LOGIN':
            return {
                ...state,
            };
        case 'LOGIN_SUCCESS':
            console.log(action.payload)
            return {
                ...state,
                email: '',
                pass: '',
                login: true,
            };
        case 'LOGIN_ERROR':
            console.log(action.payload);
            return {
                ...state,
                email: '',
                pass: '',
                error: true,
                errorMessage: action.payload
            };
        default:
            return state
    }
}