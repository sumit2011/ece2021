import React from 'react'

import styled from 'styled-components';
import Giscus from '@giscus/react';


const Container = styled.div`
  position: relative;  // for the fireworks happy diwali effect

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

  // background-color: #2d0a0a; /* Dark reddish background */
  border-radius: 10px;
  padding: 20px;
  // margin: 20px;
  max-width: 400px;
  // width: 350px;
  // border: 2px solid #ff1a1a; /* Reddish glowing border */
  // box-shadow: 0 0 15px 5px rgba(255, 26, 26, 0.5);
  color: white;
  font-family: Arial, sans-serif;
  // display: flex;
  margin: 100px auto;
  margin: 20px;
  margin-top: 40px;
  margin: 50px auto;
  background-color: #0a1f2d;
  border: 2px solid #1a6cff;
  box-shadow: 0 0 15px 5px rgba(26, 108, 255, 0.5);
  @media (max-width: 500px){
      margin: 20px;
  }
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

const DiscussionPage = () => {

  return (
    <Container style={{ color: "white", marginTop: "110px" }}>
      <Title>
        <h1 >Discussion Page</h1>
      </Title>

      <Alert>
        <div>
          <h2>Under Upgradation ⚒️</h2>
          <p>It's a Discussion Page page here you can discuss anything you want.
            but you have to log in with your github id...
          </p>
        </div>

      </Alert>



      <div >
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


      </div>

    </Container>
  )
}

export default DiscussionPage