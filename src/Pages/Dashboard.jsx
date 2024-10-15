

import React from 'react';
import { Datas } from '../Utils/Data/Data';
import CircularCard from '../Components/CircularCard';
import styled from 'styled-components';



const Header = styled.div`
  display: flex;
  justify-content: center;
  // font-size : 40px;
  align-items: center;
`;

const DashboardMain = styled.div`
  // background-color: #f8fbe3;
  // color: #00ff00;
  display: flex;
  flex-wrap: wrap; 
  justify-content: center; 
  height: 100%;
  width: 70%;
  padding: 50px;
  position: relative;
  gap: 10px;
  // background-color: ${({theme}) => theme.bg};

`;


const CardMain = styled.div`
  margin-left: -30px; 
  // margin-top: -10px;
`;


const Dashboard = () => {
  return (
    <div style={{width: "100%" , display: "flex",flexWrap:"wrap", justifyContent: "center"}}>
      <Header>
      <h1 style={{color:"white"}}>Join the Ultimate<br/><span style={{color:"#00ff00"}}>ECE 2021 Community..</span></h1> 

      </Header>
      
    
    <DashboardMain>
      {Datas.map((data) => (
        <CardMain > 
          <CircularCard {...data} />
        </CardMain>
      ))}
    </DashboardMain>

    </div>
  );
};

export default Dashboard;



