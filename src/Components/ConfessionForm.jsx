import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components

const Container = styled.div`
 margin: 20px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 10px;
  // width: 400px;
  margin: 50px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative; // for the close button positioning
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 95%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: #4CAF50;
  }
`;

const Textarea = styled.textarea`
  width: 95%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
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
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  &:hover {
    background-color: #45a049;
  }
`;

const CustomAlertContainer = styled.div`
  text-align: center;
  z-index: 2000;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #0a1f2d;
  border-radius: 10px;
  padding: 10px;
  max-width: 400px;
  width: 220px;
  border: 2px solid #1a6cff;
  box-shadow: 0 0 15px 5px rgba(26, 108, 255, 0.5);
  color: white;
  font-family: Arial, sans-serif;
`;

const CustomAlertButton = styled.button`
  background-color: #ff6347;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;



const NameMessageForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    date: '', // added date field
  });

  const [alertVisible, setAlertVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Capture the current date
    const currentDate = new Date().toLocaleString();

    // Log form data
    console.log('Form Data:', { ...formData, date: currentDate });

    // Include the date in the data
    const data = [[formData.name, formData.message, currentDate]];

    try {
      const response = await fetch('https://v1.nocodeapi.com/sumit2011/google_sheets/olakhZguFbKubafv?tabId=Sheet2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        setAlertVisible(true); // Show alert after form submission
        setFormVisible(false); // Hide the form after submission
      } else {
        const errorResponse = await response.json();
        console.error('Error submitting form:', errorResponse);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Container>
      {formVisible && (
        <FormContainer>
          <h2>Write your Confession 🤫</h2>
          <CloseButton onClick={() => setFormVisible(false)}>X</CloseButton>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              placeholder="Enter your name"
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
      )}

      {alertVisible && (
        <CustomAlertContainer>
          <h3>Thank you, {formData.name}! 🎉</h3>
          <p>Your confession will be added shortly.</p>
          <CustomAlertButton onClick={() => setAlertVisible(false)}>
            Close
          </CustomAlertButton>
        </CustomAlertContainer>
      )}
    </Container>
  );
};

export default NameMessageForm;
