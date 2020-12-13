import React from 'react'
import styled from 'styled-components';
import {Menu} from "./Menu";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {changeCustomer, changeNameOfRequest, onAddNewRequest} from "../../redux/action-creators/request";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationCircle} from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
`;

const Title = styled.h1`
    margin: 0 0 20px 30px;
    text-align: left;
`;

const Input = styled.input`
    margin-right: 20px;
    padding: 10px 20px;
    outline: none;
    border: 1px solid #eee;
    font-size: 14px;
`;

const Form = styled.form`
    display: flex;
    margin-left: 30px;
`;

const Button = styled.button`
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    background-color: #73bbed;
    border: 0;
    
    :hover {
        cursor: pointer;
        background-color: #a0ceed;
    }
`;

const Error = styled.div`
   margin-top: 20px;
   padding: 5px 10px;
   border-radius: 5px;
   background-color: #fb4848;
   color: #fff;
   font-size: 14px;
`;

const Success = styled.div`
   margin-top: 20px;
   padding: 5px 10px;
   border-radius: 5px;
   background-color: #77ca72;
   color: #fff;
   font-size: 14px;
`;

const ErrorIcon = styled(FontAwesomeIcon)`
    margin-right: 3px;
`;

const SuccessIcon = styled(FontAwesomeIcon)`
    margin-right: 3px;
`;

const MessageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 30px;
`;

const New = ({onChangeNameOfRequest, onChangeCustomer, onAdd, name, customer, isAddSuccess, error, isChangedFields}) => {
    return (
        <Wrapper>
            <Menu/>
            <Title>Создание новой заявки</Title>
            <Form>
                <Input onChange={onChangeNameOfRequest} value={name} placeholder={'Название заявки'}/>
                <Input onChange={onChangeCustomer} value={customer} placeholder={'ФИО клиента'}/>
                <Button onClick={(e) => onAdd(e, name, customer)}>Добавить</Button>
            </Form>
            {isAddSuccess && !isChangedFields &&
            <MessageWrapper>
                <Success><SuccessIcon icon={faExclamationCircle}/>Успешно добавлено</Success>
            </MessageWrapper>}

            {!isAddSuccess && error.length !== 0 &&
            <MessageWrapper>
                <Error><ErrorIcon icon={faExclamationCircle}/>Произошла ошибка</Error>
            </MessageWrapper>
            }
        </Wrapper>

    )
};

New.propTypes = {
    onChangeNameOfRequest: PropTypes.func,
    onChangeCustomer: PropTypes.func,
    onAdd: PropTypes.func,
    name: PropTypes.string,
    customer: PropTypes.string,
    isAddSuccess: PropTypes.bool,
    requests: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        customer: PropTypes.string,
        status: PropTypes.string,
        create: PropTypes.number,
    }),
    error: PropTypes.string,
    isChangedFields: PropTypes.bool
};

const mapStateToProps = (state) => {
    return {
        requests: state.request.requests,
        name: state.request.name,
        customer: state.request.customer,
        isAddSuccess: state.request.isAddSuccess,
        error: state.request.error,
        isChangedFields: state.request.isChangedFields,
    }
};

const mapDispatchToProps = dispatch => ({
    onChangeNameOfRequest: (e) => dispatch(changeNameOfRequest(e)),
    onChangeCustomer: (e) => dispatch(changeCustomer(e)),
    onAdd: (e, name, customer) => dispatch(onAddNewRequest(e, name, customer))
});

export default connect(mapStateToProps, mapDispatchToProps)(New)

