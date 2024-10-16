import React from 'react';
import { Datas } from '../Utils/Data/Data';
import CircularCard from '../Components/CircularCard';
import styled from 'styled-components';


const DashboardContainer = styled.div`
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  width: 80%;
  margin: 120px auto;
`;


const Header = styled.div`
  // box-shadow: 0 0 15px rgba(0, 255, 0, 0.3);
  padding: 20px;
  display: flex;
  justify-content: center;
  // font-size : 20px;
  align-items: center;
  text-align: center;
`;

const DashboardMain = styled.div`
  display: flex;
  flex-wrap: wrap; 
  justify-content: center; 
  margin-top: 50px;
  gap: 4px;
  // background-color: ${({ theme }) => theme.bg};

`;


const CardMain = styled.div`
  margin-left: -30px; 
`;

const Button = styled.div`
  background: green;
  height: 35px;
  border-radius: 30px;
  justify-content: center;
  text-align: center;
  color: white;
  padding-top: 5px;
  width: 270px;
  margin: 0px auto;
  font-size: 22px;
  font-weight: bold;
  cursor: pointer;
`;

const Footer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 100px;
  justify-content: center;
`;

const Title = styled.div`
  color: white;
  flex-basis: 100%; 
  text-align: center;
  
`;



const Hr = styled.div`
  margin-top: 100px;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8));
  padding: 10px 20px;
  border-radius: 50px;
  border: 2px solid rgba(0, 255, 0, 0.5);
  box-shadow: 0 0 15px rgba(0, 255, 0, 0.3);
  border: none;

`;

const Dashboard = () => {

  const sumit = Datas[0];

  return (
    <DashboardContainer >
      <Header>
        <h1 style={{ color: "white" }}>Join the Ultimate <br /><span style={{ color: "#00ff00" }}>ECE 2021 Community...</span></h1>
      </Header>
      <Button>
        Add Yours
      </Button>
      <DashboardMain>
        {Datas.map((data) => (
          <CardMain >
            <CircularCard {...data} />
          </CardMain>
        ))}
      </DashboardMain>

      <Hr />
      <Footer>
        <Title>
          <h3>Designed with ❤️ by</h3> 
        </Title>
        <br/>
        <CircularCard {...sumit} />
        <Title>
          <h3>sumit...</h3> 
        </Title>
      </Footer>



    </DashboardContainer>
  );
};

export default Dashboard;



