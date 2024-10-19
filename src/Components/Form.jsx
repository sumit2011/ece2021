import React, { useState } from 'react';
import styled from 'styled-components';
import { Person, Email, Assignment, Instagram, Facebook, Twitter, LinkedIn, Link, Image as ImageIcon } from '@mui/icons-material';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: #152515;
  padding: 30px;
  border-radius: 10px;
  width: 400px;
  max-width: 90%;
  max-height: 50vh;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1001;
  border: 2px solid rgba(0, 255, 0, 0.5);
  box-shadow: 0 0 15px rgba(0, 255, 0, 0.3);
  color: #00ff00;
  margin: 20px;
`;

const FormContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding-right: 10px;
  margin-top: 20px;
  max-height: 70vh;

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  scrollbar-width: none;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const InputIcon = styled.div`
  margin-right: 10px;
  font-size: 30px;
  color: white;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #00ff00;
  background-color: transparent;
  color: white;
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
    background-color: transparent;
  }
`;

const SubmitButton = styled.button`
  background: #00ff00;
  color: black;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 97%;
  margin-top: 10px;
`;

const CustomAlertContainer = styled.div`
  text-align: center;
     z-index: 2000;
position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  // box-shadow: 0 0 15px rgba(0, 255, 0, 0.5);

  background-color: #2d0a0a; /* Dark reddish background */
  border-radius: 10px;
  padding: 10px;
  // margin: 20px;
  max-width: 400px;
  width: 220px;
  border: 2px solid #ff1a1a; /* Reddish glowing border */
  box-shadow: 0 0 15px 5px rgba(255, 26, 26, 0.5);
  color: white;
  font-family: Arial, sans-serif;
  // display: flex;
  justify-content: 
 
  @media (max-width: 500px){
      margin: 20px;
  }
  
`;

const CustomAlertButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;

const JoinForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    enroll: '',
    instaid: '',
    facebookid: '',
    twitterid: '',
    linkedinid: '',
    link: '',
    image: null // To store image file
  });

  const [alertVisible, setAlertVisible] = useState(false); // State to control alert visibility

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle image file changes
  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create a 2D array for the data
    const data = [
      [
        formData.name,
        formData.email,
        formData.enroll,
        formData.instaid,
        formData.facebookid,
        formData.twitterid,
        formData.linkedinid,
        formData.link,
      ],
    ];

    try {
      const response = await fetch('https://v1.nocodeapi.com/sumit2011/google_sheets/olakhZguFbKubafv?tabId=Sheet1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // Send the 2D array as JSON
      });

      if (response.ok) {
        setAlertVisible(true); // Show success alert
      } else {
        const errorResponse = await response.json();
        console.error('Error submitting form:', errorResponse);
      }
    } catch (error) {
      console.error('Error:', error);
    }

    // Don't close the modal immediately after submission
  };

  return (
    <>
      <ModalBackground>
        <ModalContainer>
          <CloseButton onClick={onClose}>X</CloseButton>
          <h2>Join the Community 🚀</h2>
          <FormContainer>
            <form onSubmit={handleSubmit}>
              <InputContainer>
                <InputIcon><Person /></InputIcon>
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </InputContainer>
              <InputContainer>
                <InputIcon><Email /></InputIcon>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </InputContainer>
              <InputContainer>
                <InputIcon><Assignment /></InputIcon>
                <Input
                  type="text"
                  name="enroll"
                  placeholder="Enrollment"
                  value={formData.enroll}
                  onChange={handleInputChange}
                  required
                />
              </InputContainer>
              <InputContainer>
                <InputIcon><Instagram /></InputIcon>
                <Input
                  type="text"
                  name="instaid"
                  placeholder="Instagram ID"
                  value={formData.instaid}
                  onChange={handleInputChange}
                  required
                />
              </InputContainer>
              <InputContainer>
                <InputIcon><Facebook /></InputIcon>
                <Input
                  type="text"
                  name="facebookid"
                  placeholder="Facebook ID"
                  value={formData.facebookid}
                  onChange={handleInputChange}
                  required
                />
              </InputContainer>
              <InputContainer>
                <InputIcon><Twitter /></InputIcon>
                <Input
                  type="text"
                  name="twitterid"
                  placeholder="Twitter ID"
                  value={formData.twitterid}
                  onChange={handleInputChange}
                  required
                />
              </InputContainer>
              <InputContainer>
                <InputIcon><LinkedIn /></InputIcon>
                <Input
                  type="text"
                  name="linkedinid"
                  placeholder="LinkedIn ID"
                  value={formData.linkedinid}
                  onChange={handleInputChange}
                  required
                />
              </InputContainer>
              <InputContainer>
                <InputIcon><Link /></InputIcon>
                <Input
                  type="text"
                  name="link"
                  placeholder="Portfolio Link"
                  value={formData.link}
                  onChange={handleInputChange}
                  required
                />
              </InputContainer>
              {/* Image upload */}
              <InputContainer>
                <InputIcon><ImageIcon /></InputIcon>
                <Input
                  type="file"
                  name="image"
                  onChange={handleImageChange}
                  accept="image/*"
                />
              </InputContainer>
              {/* Submit button */}
              <SubmitButton type="submit">
                Submit
              </SubmitButton>
            </form>
          </FormContainer>
        </ModalContainer>
      </ModalBackground>

      {/* Custom Alert */}
      {alertVisible && (
        <CustomAlertContainer>
          <h3>Form Submitted Successfully!<br/>
            Thank you for joining 🤗...
            
          </h3>
          <CustomAlertButton onClick={() => {
            setAlertVisible(false);
            onClose(); // Close the modal when alert is closed
          }}>
            Close
          </CustomAlertButton>
        </CustomAlertContainer>
      )}
    </>
  );
};

export default JoinForm;
