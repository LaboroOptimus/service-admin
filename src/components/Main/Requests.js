import React from 'react';
import styled from 'styled-components';
import {Dropdown} from "../Main/Dropdown";
import {Menu} from "../Main/Menu";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

/* const Head = styled.div`
    font-weight: bold;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin: 10px 30px;
`; */

const Title = styled.h1`
    margin: 0 0 20px 30px;
    text-align: left;
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
`;

const Name = styled.span`
    padding: 5px;
    font-size: 14px;
`;

const Customer = styled.span`
    padding: 5px;
    font-size: 14px;
`;

const Date = styled.span`
    padding: 5px;
    font-size: 14px;
`;

const Status = styled.span`
    color: #fff;
    background-color: #73bbed;
    padding: 5px 10px;
    font-size: 14px;
    border-radius: 5px;
`;

export const Requests = () => {
    return (
        <Wrapper>
            <Menu/>
            <Title>Все заявки</Title>
            <Item>
                <Id>123</Id>
                <Name>Ремонт компьютера Apple</Name>
                <Customer>Иванов Иван Иванович</Customer>
                <Date>12.03.2020</Date>
                <Status>Принят в работу</Status>
                <Dropdown id={1}/>
            </Item>
            <Item>
                <Id>123</Id>
                <Name>Ремонт компьютера Apple</Name>
                <Customer>Иванов Иван Иванович</Customer>
                <Date>12.03.2020</Date>
                <Status>Принят в работу</Status>
                <Dropdown id={2}/>
            </Item>
            <Item>
                <Id>123</Id>
                <Name>Ремонт компьютера Apple</Name>
                <Customer>Иванов Иван Иванович</Customer>
                <Date>12.03.2020</Date>
                <Status>Принят в работу</Status>
                <Dropdown id={3}/>
            </Item>
        </Wrapper>
    )
};