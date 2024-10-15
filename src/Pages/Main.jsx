import React from 'react'
import { Datas } from '../Utils/Data/Data'
import MainCard from '../Components/MainCard'
import styled from 'styled-components';

const MainContainer = styled.div`
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
  // width: 80%;
  justify-content: center;
`;

const Card = styled.div`
  margin: 10px;
`;

const Main = () => {
  return (
    <MainContainer>
      {Datas.map ((Data) => (
        <Card >
            <MainCard {...Data}/>
        </Card> 
      ))}
    </MainContainer>
  )
}

export default Main