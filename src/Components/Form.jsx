import React from 'react';
import styled from 'styled-components';
import { Person, Email, Assignment, Instagram, Facebook, Twitter, LinkedIn, Link } from '@mui/icons-material';

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
`;

const ModalContainer = styled.div`
  background-color: #152515;
  padding: 30px;
  border-radius: 10px;
  width: 400px;
  max-width: 90%;
  max-height: 50vh; /* Limit the height to 90% of the viewport */
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
  overflow-y: auto; /* Enable vertical scrolling */
  padding-right: 10px; /* Add space to avoid scrollbar overlapping */
  margin-top: 20px;
  max-height: 70vh; /* Limit the form height to make it scrollable */

  /* Hide the scrollbar */
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  scrollbar-width: none; /* Firefox */
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
  font-size: 30px; /* Adjust icon size */
  color: white;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #00ff00;
  background-color: transparent; /* Make background transparent */
  color: white; /* Text color */
  &::placeholder {
    color: rgba(255, 255, 255, 0.7); /* Placeholder text color */
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

const JoinForm = ({ onClose }) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    enroll: '',
    instaid: '',
    facebookid: '',
    twitterid: '',
    linkedinid: '',
    link: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle form submission (e.g., send to backend)
    onClose(); // Close modal after form submission
  };

  return (
    <ModalBackground>
      <ModalContainer>
        <CloseButton onClick={onClose}>X</CloseButton>
        <h2>Join the Community</h2>
        <FormContainer>
          <form>
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
          </form>
        </FormContainer>
        {/* Submit button placed outside the form */}
        <SubmitButton type="submit" onClick={handleSubmit}>
          Submit
        </SubmitButton>
      </ModalContainer>
    </ModalBackground>
  );
};

export default JoinForm;
