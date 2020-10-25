export const changeEmail = (e) => {
    const value = e.target.value;
    return {
        type: 'CHANGE_EMAIL',
        payload: value
    }
};

export const changePass = (e) => {
    const value = e.target.value;
    return {
        type: 'CHANGE_PASS',
        payload: value
    }
};

export const login = (e, email, pass) => {
    e.preventDefault();
    return {
        type: 'LOGIN',
        payload: {email, pass}
    }
};
