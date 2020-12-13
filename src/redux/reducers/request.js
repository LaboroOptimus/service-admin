const initialState = {
    requests: [],
    isRequestsLoad: false,
    name: '',
    customer: '',
    isAddSuccess: false,
    error: '',
    isChangedFields: false,
};

export default function requestReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_SUCCESS':
            return {
                ...state,
                name: '',
                customer: '',
                isAddSuccess: true,
                isChangedFields: false,
            };
        case 'ADD_ERROR':
            return {
                ...state,
                name: '',
                customer: '',
                isAddSuccess: false,
                error: 'Произошла ошибка:' + action.payload,
            };
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.payload,
                isChangedFields: true,
            };
        case 'CHANGE_CUSTOMER':
            return {
                ...state,
                customer: action.payload,
                isChangedFields: true,
            };
        case 'LOAD_REQUEST':
            return {
                ...state,
                isRequestsLoad: true
            };
        case 'ADD_REQUEST':
            return {
                ...state,
                requests: [...state.requests,
                    {   id: action.payload.id,
                        name: action.payload.name,
                        customer: action.payload.customer,
                        status: action.payload.status,
                        create: action.payload.date,
                    }
                ]
            };
        default:
            return {
                ...state,
            }
    }
}