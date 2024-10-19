import React, { useState } from 'react';
import { Datas } from '../Utils/Data/Data';
import CircularCard from '../Components/CircularCard';
import styled from 'styled-components';
import JoinForm from '../Components/Form';


const DashboardContainer = styled.div`
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 120px auto;
  @media (max-width: 550px){
     width: 100%;
  }
`;


const Header = styled.div`
  // box-shadow: 0 0 15px rgba(0, 255, 0, 0.3);
  padding: 20px;
  display: flex;
  justify-content: center;
  // font-size : 20px;
  align-items: center;
  text-align: center;
  user-select: none;

`;

const DashboardMain = styled.div`
  display: flex;
  flex-wrap: wrap; 
  justify-content: center; 
  margin-top: 50px;
  gap: 4px;
  margin-left: 20px;

`;


const CardMain = styled.div`
  margin-left: -30px; 
`;

const Button = styled.div`
  // height: 35px;
  
  // justify-content: center;
  text-align: center;
  
  margin: 0px auto;
  background: green;
  color: white;
  padding: 4px 20px;
  font-size: 22px;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  max-width: 270px;
  margin-top: 10px;
`;

const Footer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 100px;
  justify-content: center;
  
`;

const Title = styled.div`
  display: flex;
  color: white;
  flex-basis: 100%; 
  text-align: center;
  justify-content: center;
  align-items: center;
  // cursor: not-allowed;
   user-select: none;
`;



const Hr = styled.div`
  margin-top: 150px;
  padding: 10px 20px;
  box-shadow: 0 4px 8px -2px rgba(0, 255, 0, 0.3);
  border: none;
`;

const Heart = styled.div`
/* pulsating heart */
  position: relative;
  z-index: 0; 
  animation: pulse 1s ease infinite;
  width: 40px;

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}

`;

const Dashboard = () => {

  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleClick = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };



  const sumit = Datas[0];

  return (
    <DashboardContainer >
      <Header>
        <h1 style={{ color: "white" }}>Join the Ultimate <br /><span style={{ color: "#00ff00" }}>ECE 2021 Community</span></h1>
      </Header>
      <Button onClick={handleClick}>
        Join Now
      </Button>

      {isFormOpen && <JoinForm onClose={handleCloseForm} />}

      <div style={{ paddingLeft: "8px" }}>
        <DashboardMain>
          {Datas.map((data) => (
            <CardMain >
              <CircularCard {...data} />
            </CardMain>
          ))}
        </DashboardMain>
      </div>


      <Hr />
      <Footer>
        <Title>
          <span><h3>Designed with</h3></span>
          <Heart>❤️</Heart>

          <span><h3>by</h3></span>
        </Title>
        <br />
        <CircularCard {...sumit} />

      </Footer>



    </DashboardContainer>
  );
};

export default Dashboard;


