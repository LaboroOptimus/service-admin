import {randomInteger} from "../../utils/generateId";

export const changeNameOfRequest = (e) => {
    const value = e.target.value;
    return {
        type: 'CHANGE_NAME',
        payload: value
    }
};

export const changeCustomer = e => {
    const value = e.target.value;
    return {
        type: 'CHANGE_CUSTOMER',
        payload: value
    }
};

export const onAddNewRequest = (e,name, customer) => {
    e.preventDefault();
    const time = new Date();
    const today = time.getDate() + '/' + (time.getMonth() + 1);
    const status = 'new';
    const id = randomInteger(1,100000000);
    return {
        type: 'ADD_REQUEST',
        payload: {id, name, customer, status, date: today}
    }
};

export const loadRequests = () => {
    return {
        type: 'LOAD_REQUESTS'
    }
};

export const deleteRequest = (id) => {
    console.log('удаляем', id);
    return {
        type: 'DELETE_REQUEST',
        payload: id
    }
};

export const changeStatus = (id, status) => {
    return {
        type: 'CHANGE_STATUS',
        payload: {id, status}
    }
};