import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom'

const Wrapper = styled.div`
    display: flex;
    margin: 20px 30px;
`;

const CustomLink = styled(NavLink)`
    font-size: 16px;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    color: #73bbed;
    margin-right: 20px;
    
    :hover {
        border-bottom: 1px solid #73bbed;
        cursor: pointer;
    }
`;


export const Menu = () => {
    return (
        <Wrapper>
            <CustomLink to={'/requests'}>Все заявки</CustomLink>
            <CustomLink to={'/new'}>Новая заявка</CustomLink>
        </Wrapper>
    )
};
