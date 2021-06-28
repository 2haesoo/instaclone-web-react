import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.fontColor};
`;

const Container = styled.div`
  
`;

function Login() {
  return (
    <div>
      <Container>
        <Title>Login</Title>
      </Container>
    </div>
  );
}

export default Login;
