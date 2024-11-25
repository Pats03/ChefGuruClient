import React from 'react';
import styled from 'styled-components';
import { backgroundmg } from '../images'; // Adjust path as needed
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  background-color: transparent;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  width: 40vw;
  max-width: 100%;
  min-height: 30vw;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  background-color: rgba(255, 237, 213, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  width: 100%;
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
  width: 80%;
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

const HelpLink = styled.a`
  margin-top: 20px;
  color: #333;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
`;

const Api = () => {
  const navigate = useNavigate(); // Use navigate hook inside the component

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle API Key Submission here
    const apiKey = event.target.apiKey.value;
    console.log('Submitted API Key:', apiKey);
    navigate('../dashboard'); // Navigate to the dashboard
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: `url(${backgroundmg})`, // Corrected
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100vw',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        }}
      >
        <Container>
          <Form onSubmit={handleSubmit}>
            <Title>Enter API Key</Title>
            <Input type="text" name="apiKey" placeholder="Enter your API Key" />
            <Button type="submit">Submit</Button>
            <HelpLink
              href="src/images/apikey.pdf" // Replace with the actual path to your PDF
              target="_blank"
            >
              Click here for API Documentation (PDF)
            </HelpLink>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default Api;
