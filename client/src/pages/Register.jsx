import React from 'react';
import styled from 'styled-components';
import { backgroundmg } from '../images'; // Make sure the path to your image is correct.
import { logo1 } from '../images';

const Container = styled.div`
  background-color: transparent;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  width: 50vw;
  max-width: 100%;
  min-height: 30vw;
`;

const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  ${(props) =>
    props.signinIn !== true
      ? `
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
  `
      : null}
`;

const SignInContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;
  ${(props) =>
    props.signinIn !== true ? `transform: translateX(100%);` : null}
`;

const Form = styled.form`
  background-color: rgb(255, 237, 213, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`;

const Title = styled.h1`
  font-weight: bold;
  margin: 0;
  margin-bottom: 1vh;
  font-size: x-large;
`;

const Input = styled.input`
  background-color: rgba(255, 237, 213, 1);
  border: 1px solid brown;
  border-radius: 2vh;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
`;

const Button = styled.button`
  border-radius: 20px;
  background-color: rgba(67, 20, 7, 1);
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`;

const GhostButton = styled(Button)`
  background-color: transparent;
  border: 1px solid #ffffff;
`;

const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  ${(props) =>
    props.signinIn !== true ? `transform: translateX(-100%);` : null}
`;

const Overlay = styled.div`
  background: rgba(67, 20, 7, 1);
  background-repeat: no-repeat;
  background-size: cover;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${(props) => (props.signinIn !== true ? `transform: translateX(50%);` : null)}
`;

const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

const Login = () => {
  const [signIn, setSignIn] = React.useState(false);

  const toggle = (signInState) => {
    setSignIn(signInState);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: `url(${backgroundmg})`, // Use your background image here.
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container>
        <SignInContainer signinIn={signIn}>
          <Form>
            <Title>Log In</Title>
            <Input type="email" placeholder="Email" required />
            <Input type="password" placeholder="Password" required />
            <Button>Sign In</Button>
          </Form>
        </SignInContainer>
        <SignUpContainer signinIn={signIn}>
          <Form>
            <Title>Create Account</Title>
            <Input type="text" placeholder="Name" required />
            <Input type="email" placeholder="Email" required />
            <Input type="password" placeholder="Password" required />
            <Input type="password" placeholder="Confirm Password" required />
            <Button>Sign Up</Button>
          </Form>
        </SignUpContainer>
        <OverlayContainer signinIn={signIn}>
          <Overlay signinIn={signIn}>
            <OverlayPanel>
              <GhostButton onClick={() => toggle(true)}>Sign In</GhostButton>
            </OverlayPanel>
            <OverlayPanel>
              <GhostButton onClick={() => toggle(false)}>Sign Up</GhostButton>
            </OverlayPanel>
          </Overlay>
        </OverlayContainer>
      </Container>
    </div>
  );
};

export default Login;
