import React from 'react'
import styled from 'styled-components';
import {changeEmail, changePass, login} from "../../redux/action-creators/login";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {Redirect} from "react-router";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const Input = styled.input`
    width: 200px;
    margin: 10px 0 10px 0;
    padding: 10px 20px;
    border: 2px solid #eee;
    border-radius: 10px;
    outline:none;
    
    :focus {
        border: 2px solid #5e69e9;
    }
    
`;

const Button = styled.button`
    color: #fff;
    background-color: #5e69e9;
    border: 2px solid #5e69e9;
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 700;
    margin-top: 10px;
    
    :hover {
        cursor: pointer;
        border: 2px solid #5e69e9;
        color: #5e69e9;
        background-color: transparent;
    }
    
    :focus {
     outline:none;
    }
`;

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const LoginForm = ({email, pass, onChangeEmail, onChangePass, onLogin, login}) => {
    return (
        <>
            {login &&  <Redirect to={'/test'}/>}
            <Wrapper>
                <form>
                    <FormWrapper>
                        <h2>Вход в систему</h2>
                        <Input onChange={onChangeEmail} value={email} placeholder={'Email'}/>
                        <Input onChange={onChangePass} value={pass} placeholder={'Пароль'}/>
                        <Button onClick={(e) => onLogin(e, email, pass)}>Войти</Button>
                    </FormWrapper>
                </form>
            </Wrapper>
        </>
    )
};

LoginForm.propTypes = {
    email: PropTypes.string,
    pass: PropTypes.string,
    onChangeEmail: PropTypes.func,
    onChangePass: PropTypes.func,
    onLogin: PropTypes.func,
    login: PropTypes.bool,
};

const mapStateToProps = (state) => {
    return {
        email: state.login.email,
        pass: state.login.pass,
        login: state.login.login
    }
};

const mapDispatchToProps = dispatch => ({
    onChangeEmail: (e) => dispatch(changeEmail(e)),
    onChangePass: (e) => dispatch(changePass(e)),
    onLogin: (e, name, pass) => dispatch(login(e, name, pass))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)