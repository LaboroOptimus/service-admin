const initialState = {
    status: false,
};


export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case 'TEST':
            return state;
        default:
            return state

    };
}