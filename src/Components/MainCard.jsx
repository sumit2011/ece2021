import React from 'react';
import styled from 'styled-components';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// Styled Components
const MainCardContainer = styled.div`
  background-color: #152515;
  color: #00ff00;
  border-radius: 15px;
  padding: 20px;
  width: 300px;
  max-width: 350px;
  justify-content: center;
  align-items: center;
  font-family: 'Arial', sans-serif;
  border : 2px solid #00ff00;
  transition: all 0.5s ease-in-out;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8));
  border: 2px solid rgba(0, 255, 0, 0.5);
  box-shadow: 0 0 15px rgba(0, 255, 0, 0.3);
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
    filter: brightness(1.1);
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  // margin-bottom: 10px;
`;


const Avatar = styled.img`
  width: 60px ;
  height: 60px;
  margin: -10px;
  border-radius: 4px;
  background-color: #006400;
  display: flex;
  justify-content: center;
  align-items: center;
  // margin-right: 10px;
`;

const StudentInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px
`;

const StudentName = styled.div`
  color:white;
  font-size: 20px;
  font-weight: 800;
  // margin-left: 40px;
`;

const Enroll = styled.div`
  
  font-size: 15px;
  font-weight: 800;
  color: #FFD700; 
  margin-bottom: -10px;
`;

const Icon = styled.a`
    color: white;
    target: _blank;
    cursor: pointer;
`

const MainCard = (props) => {

  return (
    <MainCardContainer>
        <Row key={props.id}>
          
            <Avatar src={props.image} />
          <StudentInfo >
            <StudentName >{props.name}</StudentName>
            <Enroll>{props.enroll}</Enroll>
          </StudentInfo>

          {/* <Icon href={props.linkedin}>
                <LinkedInIcon style={{height: "20px" , width: "20px"}}/>
            </Icon> */}

        </Row>
    </MainCardContainer>
  );
};

export default MainCard;
