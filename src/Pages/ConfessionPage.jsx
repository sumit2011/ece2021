import React from 'react'
import { Confessions } from '../Utils/Data/Confession';
import ConfessionCard from '../Components/ConfessionCard';
import styled from 'styled-components';
import Giscus from '@giscus/react';


const Container = styled.div`
  // display: flex;
  // flex-basic: 100;
  justify-content: center;
  align-item: center;
`;


const Alert = styled.div`
  background-color: #2d0a0a; /* Dark reddish background */
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  max-width: 400px;
  // width: 350px;
  border: 2px solid #ff1a1a; /* Reddish glowing border */
  box-shadow: 0 0 15px 5px rgba(255, 26, 26, 0.5);
  color: white;
  font-family: Arial, sans-serif;
  display: flex;
  margin: 100px auto;
  margin: 20px;
  margin-top: 40px;
`;

const Discussions = styled.div`
  // padding: 10px;
  
  // max-width: 400px;
  // width: 350px;

  display: flex;
  margin: 100px auto;
  margin: 20px;


  
`;

const ConfessionPage = () => {

  return (
    <Container style={{color: "white" , marginTop: "150px"} }>
      <h1 style={{textAlign:"center"}}>Confession Page</h1>
      <Alert>
        <div>
        <h2>Under Production ⚒️</h2>
        <p>It's a confession page here you can confess anything you want.
          but you can only add your confession if you are the member.
        </p>
        </div>
        
      </Alert>

      {Confessions.map((item)=>(
        <ConfessionCard  
              {...item}
          />
      )     
      )}


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

    

    </Container>
  )
}

export default ConfessionPage