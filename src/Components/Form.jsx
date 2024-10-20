import React, { useState } from 'react';
import styled from 'styled-components';
import { Person, Email, Assignment, Instagram, Facebook, Twitter, LinkedIn, Link, Image as ImageIcon } from '@mui/icons-material';

// Styled components
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, ${(props) => (props.alertVisible ? 0.7 : 0.7)});
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  flex-direction: column;
  
`;

const ModalContainer = styled.div`
  background-color: #152515;
  padding: 30px;
  border-radius: 10px;
  max-width: 400px;
  // max-width: 100%;
  max-height: 50vh;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1001;
  border: 2px solid rgba(0, 255, 0, 0.5);
  box-shadow: 0 0 15px rgba(0, 255, 0, 0.3);
  color: #00ff00;
  // padding-top: 35px;
  opacity: ${(props) => (props.alertVisible ? 0.1 : 1)}; // Conditional opacity
  margin: 20px;


`;

const FormContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding-right: 10px;
  margin-top: 20px;
    opacity: ${(props) => (props.alertVisible ? 0.1 : 1)}; // Conditional opacity
  transition: opacity 0.3s ease; // Smooth transition for opacity change

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

const Warning = styled.div`
  background-color: #0a1f2d;
  border-radius: 10px;
  padding: 10px;
  color: grey;
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 14px;
  border: 2px solid #1a6cff;
  box-shadow: 0 0 15px 5px rgba(26, 108, 255, 0.5);
  // width: 400px;
  max-width: 400px;
  margin: 20px;
  margin-bottom: 0px;
  text-align: justify;
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

// Main component
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
      const response = await fetch('https://v1.nocodeapi.com/n4ksum/google_sheets/JVsRJbiqbjOXDJFX?tabId=Sheet1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), 
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        setAlertVisible(true); // Show the alert on successful submission
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
      <ModalBackground alertVisible={alertVisible}>
      <Warning ><span>⚠️ </span><span>Try to fill up all the fields. Upload squared and zoomed photo for better visibility.(Only for ECE 2021 Batch)</span></Warning>

        <ModalContainer>
          <CloseButton onClick={onClose}>X</CloseButton>
          <h2>Join the Community 🚀
          </h2>          
          <FormContainer alertVisible={alertVisible}> {/* Pass alertVisible as prop */}
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
          <h3>Thank you, {formData.name}! 🎉</h3>
          <p>You will be added shortly. Don't forget to install the app.</p>
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
