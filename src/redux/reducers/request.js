import {getStatusForServer} from "../../utils/status";

const initialState = {
    requests: [],
    isRequestsLoad: false,
    name: '',
    customer: '',
    isAddSuccess: false,
    error: '',
    isChangedFields: false,
    isLoad: false,
    isDeleteSuccess: false,
};

export default function requestReducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_STATUS':
            // eslint-disable-next-line no-case-declarations
            let index = state.requests.findIndex((obj => obj.id === action.payload.id));
            // eslint-disable-next-line no-case-declarations
            let newReq = [...state.requests];
            newReq[index].status = getStatusForServer(action.payload.status);
            return {
                ...state,
                requests: [...newReq]
            };
        case 'DELETE_REQUEST':
            return {
                ...state,
                requests: state.requests.filter(n => n.id !== action.payload)
            };
        case 'DELETE_SUCCESS':
            return {
                ...state,
                isDeleteSuccess: true,
            };
        case 'LOAD_SUCCESS':
            return {
                ...state,
                isLoad: true,
                requests: action.payload
            };
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
                    {
                        id: action.payload.id,
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