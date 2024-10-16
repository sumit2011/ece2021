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
      <h1 style={{color:"white"}}>All Members Of the Community</h1>
      {Datas.map ((Data) => (
        <Card >
            <MainCard {...Data}/>
        </Card> 
      ))}
    </MainContainer>
  )
}

export default Main