import React from 'react';
import styled from 'styled-components';

// Styled Components
const MainCardContainer = styled.div`
  background-color: #152515;
  color: #00ff00;
  border-radius: 15px;
  padding: 20px;
  width: 300px;
  max-width: 350px;
  // height: 60px;
  justify-content: center;
  align-items: center;
  font-family: 'Arial', sans-serif;
  border : 2px solid #00ff00;
  transition: all 0.5s ease-in-out;

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



const StudentName = styled.div`
  color:white;
  font-size: 30px;
  font-weight: 800;
  margin-left: 40px;
`;


const MainCard = (props) => {

  return (
    <MainCardContainer>
        <Row key={props.id}>
          {/* <StudentInfo > */}
            <Avatar src={props.image} />
            <StudentName >{props.name}</StudentName>
          {/* </StudentInfo> */}
        </Row>
    </MainCardContainer>
  );
};

export default MainCard;
