import React from 'react'
import styled from 'styled-components';
import {changeEmail, changePass, login} from "../../redux/action-creators/login";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {Redirect} from "react-router";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTable, faExclamationCircle} from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const Input = styled.input`
    width: 200px;
    margin: 10px 0 10px 0;
    padding: 10px 20px;
    border: 1px solid #eee;
    border-radius: 5px;
    outline:none;
    
    :focus {
        border: 1px solid #73bbed;
    }
    
`;

const Button = styled.button`
    color: #fff;
    background-color: #73bbed;
    border: 2px solid #73bbed;
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 14px;
    margin-top: 10px;
    
    :hover {
        cursor: pointer;
        border: 2px solid #a0ceed;
        background-color: #a0ceed;
    }
    
    :focus {
     outline:none;
    }
`;

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Error = styled.div`
   margin-top: 20px;
   padding: 5px;
   border-radius: 5px;
   background-color: #fb4848;
   color: #fff;
   font-size: 14px;
`;

const Icon = styled(FontAwesomeIcon)`
    margin-right: 3px;
`;

const LoginForm = ({email, pass, onChangeEmail, onChangePass, onLogin, login, error, errorMessage}) => {
    return (
        <>
            {login &&  <Redirect to={'/requests'}/>}
            <Wrapper>
                <form>
                    <FormWrapper>
                        <h2>Вход в систему</h2>
                        <Input onChange={onChangeEmail} value={email} placeholder={'Email'}/>
                        <Input onChange={onChangePass} value={pass} type="password" placeholder={'Пароль'}/>
                        <Button onClick={(e) => onLogin(e, email, pass)}>Войти</Button>
                        {error && <Error><Icon icon={faExclamationCircle}/>Произошла ошибка</Error>}
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
    error: PropTypes.bool,
    errorMessage: PropTypes.errorMessage,
};

const mapStateToProps = (state) => {
    return {
        email: state.login.email,
        pass: state.login.pass,
        login: state.login.login,
        error: state.login.error,
        errorMessage: state.login.errorMessage
    }
};

const mapDispatchToProps = dispatch => ({
    onChangeEmail: (e) => dispatch(changeEmail(e)),
    onChangePass: (e) => dispatch(changePass(e)),
    onLogin: (e, name, pass) => dispatch(login(e, name, pass))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)