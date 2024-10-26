import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components

const Container = styled.div`
//  margin: 20px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  padding: 20px;
  border-radius: 10px;
  // width: 400px;
  margin: 50px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative; // for the close button positioning

`;


const Input = styled.input`
  width: 95%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 20px;
  border: 2px solid green;
  font-size: 16px;
  background: black;
  &:focus {
    outline: none;
    border-color: #4CAF50;
  }
`;

const Textarea = styled.textarea`
  width: 95%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 20px;
  border: 2px solid green;
  background: black;
  font-size: 16px;
  resize: none;
  &:focus {
    outline: none;
    border-color: #4CAF50;
  }
`;

const SubmitButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  &:hover {
    background-color: #45a049;
  }
`;




const NameMessageForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    date: '', // added date field
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
  }
    
  return (
    <>
    <Container>
        <FormContainer>
          <h1>Contact Me</h1>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <Input
              type="text"
              name="email"
              placeholder="Enter your Email"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <Textarea
              name="message"
              placeholder="Enter your message"
              rows="5"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
            <SubmitButton type="submit">Submit</SubmitButton>
          </form>
        </FormContainer>
    </Container>
    </>

  );
};

export default NameMessageForm;
