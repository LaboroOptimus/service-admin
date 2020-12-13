import React from 'react'
import styled from "styled-components";
import PropTypes from "prop-types";
import Dropdown from "../Main/Dropdown";
import {color, status} from "../../utils/status";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1`
    margin: 0 0 20px 30px;
    text-align: left;
`;

const Head = styled.div`
    display: flex;
    
    text-align: left;
    font-size: 16px;
    font-weight: bold;
    margin-left: 50px;
`;

const HeadId = styled.div`
    width: 5%;
    padding: 5px;
`;

const HeadName = styled.div`
    width: 38.5%;
    padding: 5px;
`;

const HeadCustomer = styled.div`
     width: 19%;
     padding: 5px;
`;

const HeadDate = styled.div`
    width: 9.5%;
    padding: 5px;
`;

const HeadStatus = styled.div`
    width: 15%;
    padding: 5px;
`;

const Item = styled.div`
    display: flex;
    padding: 10px 20px;
    margin: 10px 30px;
    border: 1px solid #eee;
    border-radius: 10px;
    justify-content: space-between;
`;

const Id = styled.span`
    padding: 5px;
    font-size: 14px;
    width: 5%;
    text-align: left;
`;

const Name = styled.span`
    padding: 5px;
    font-size: 14px;
    width: 40%;
    text-align: left;
`;

const Customer = styled.span`
    padding: 5px;
    font-size: 14px;
    width: 20%;
    text-align: left;
`;

const Date = styled.span`
    padding: 5px;
    font-size: 14px;
    width: 10%;
    text-align: left;
`;

const Status = styled.span`
    color: #fff;
    background-color: ${(props) => props.color};
    padding: 5px 10px;
    font-size: 14px;
    border-radius: 5px;
    width: 50%;
    display: block;
`;

const StatusWrapper = styled.div`
    width: 15%;
    margin: 0 auto;
`;

const Items = ({items}) => {
    return (
        <>
            <Head>
                <HeadId>ID</HeadId>
                <HeadName>Название заявки</HeadName>
                <HeadCustomer>Клиент</HeadCustomer>
                <HeadDate>Изменена</HeadDate>
                <HeadStatus>Статус</HeadStatus>
            </Head>
            {items.map((elem, index) => {
                return (
                    <Item key={elem.name + index}>
                        <Id>{elem.id}</Id>
                        <Name>{elem.name}</Name>
                        <Customer>{elem.customer}</Customer>
                        <Date>{elem.date}</Date>
                        <StatusWrapper><Status color={color[elem.status]}>{status[elem.status]}</Status></StatusWrapper>
                        <Dropdown id={elem.id}/>
                    </Item>)
            })}
        </>
    )
};

Items.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        customer: PropTypes.string,
        status: PropTypes.string,
        create: PropTypes.number,
    })),
};

export default Items;