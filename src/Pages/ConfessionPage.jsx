import React from 'react'
import { Confessions } from '../Utils/Data/Confession';
import ConfessionCard from '../Components/ConfessionCard';
import styled from 'styled-components';
import Giscus from '@giscus/react';


const MainContainer = styled.div`
  
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 120px auto;
  @media (max-width: 750px){
     width: 70%;
  }
  @media (max-width: 550px){
     width: 100%;
  }
`;

const Title = styled.div`
margin-top: 110px;
color: white;
text-align: center;
color: white;
`;


const Alert = styled.div`
  background-color: #2d0a0a; /* Dark reddish background */
  border-radius: 10px;
  padding: 20px;
  // margin: 20px;
  max-width: 400px;
  // width: 350px;
  border: 2px solid #ff1a1a; /* Reddish glowing border */
  box-shadow: 0 0 15px 5px rgba(255, 26, 26, 0.5);
  color: white;
  font-family: Arial, sans-serif;
  // display: flex;
  margin: 100px auto;
  margin: 20px;
  margin-top: 40px;
  margin: 50px auto;
  @media (max-width: 500px){
      margin: 20px;
  }
  
`;

const Container = styled.div`
  // display: grid;
  // justify-content: center;
`;

const Discussions = styled.div`

  background-color: #152515;
  color: #00ff00;
  border-radius: 15px;
  padding: 10px;
  font-family: 'Arial', sans-serif;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  margin: 20px;
  border: 2px solid rgba(0, 255, 0, 0.5);
  box-shadow: 0 0 15px rgba(0, 255, 0, 0.3);

`;

const ConfessionPage = () => {

  return (
    <MainContainer >
      <Title>
      <h1>Confession Page</h1>

      </Title>

      <Alert>
        <div>
        <h2>Under Production ⚒️</h2>
        <p>It's a confession page here you can confess anything you want.
          but you can only add your confession if you are the member.
        </p>
        </div>
        
      </Alert>

      <Container>
      {Confessions.map((item)=>(
        <ConfessionCard  
              {...item}
          />
      )     
      )}
      </Container>
      


    <Discussions>
    <Giscus
      id="comments"
      repo="sumit2011/ece2021"
      repoId="R_kgDONAoPpw"
      category="Announcements"
      categoryId="DIC_kwDONAoPp84Cjcb6"
      mapping="pathname"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="dark"
      lang="en"
      loading="lazy"
    />
    </Discussions>

    

    </MainContainer>
  )
}

export default ConfessionPage