import React from 'react'
import { Datas } from '../Utils/Data/Data'
import MainCard from '../Components/MainCard'
import styled from 'styled-components';

const MainContainer = styled.div`
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 20px auto;

  justify-content: center;
  margin-top: 100px;
`;

const Card = styled.div`
  margin: 10px;
`;

const Main = () => {


  return (
    <MainContainer>
      <div style={{width: "100%" , textAlign:"center", margin:"10px"}}>
      <h1 style={{color:"white"}}>All Members Of the Community</h1>
      
      </div>
      {Datas.map ((Data) => (
        <Card >
            <MainCard {...Data}/>
        </Card> 
      ))}
    </MainContainer>
  )
}

export default Main