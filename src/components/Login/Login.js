import React from 'react';
import styled from 'styled-components';
import {Form} from "./Form";

const Wrapper = styled.div`
    padding: 100px;;
`;



const Login = () => {
    return (
        <Wrapper>
            <Form/>
        </Wrapper>
    )
};

export {Login}