import React from 'react'
import styled from 'styled-components'
import { isLoggedInVar } from '../apollo'

const Title = styled.h1`
    color: bisque;
    font-family: sans-serif;
`;

const Container = styled.div`
    background-color: tomato;
`;

function Login() {
    return (
        <div>
            <Container><Title>Login</Title></Container>
            <button onClick={() => isLoggedInVar(true)}>Log In</button>
        </div>
    )
}

export default Login
