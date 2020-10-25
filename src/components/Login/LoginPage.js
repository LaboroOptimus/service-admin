import React from 'react';
import styled from 'styled-components';
import LoginForm from "./LoginForm";

const Wrapper = styled.div`
    padding: 100px;;
`;

const LoginPage = () => {
    return (
        <Wrapper>
            <LoginForm/>
        </Wrapper>
    )
};

export {LoginPage}