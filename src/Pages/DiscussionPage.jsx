import React from 'react'

import styled from 'styled-components';
import Giscus from '@giscus/react';


const Container = styled.div`
  display: grid;

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

  background-color: #152515;
  color: #00ff00;
  border-radius: 15px;
  padding: 10px;
  max-width: 400px;
  font-family: 'Arial', sans-serif;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  margin: 20px;
  border: 2px solid rgba(0, 255, 0, 0.5);
  box-shadow: 0 0 15px rgba(0, 255, 0, 0.3);

`;

const DiscussionPage = () => {

  return (
    <Container style={{color: "white" , marginTop: "110px"} }>
      <h1 style={{textAlign:"center"}}>Discussion Page</h1>
      <Alert>
        <div>
        <h2>Under Production ⚒️</h2>
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