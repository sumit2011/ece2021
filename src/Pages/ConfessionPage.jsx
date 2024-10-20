import React from 'react'
import { useState, useEffect } from 'react';
import { Confessions } from '../Utils/Data/Confession';
import ConfessionCard from '../Components/ConfessionCard';
import styled from 'styled-components';
import Giscus from '@giscus/react';
import ConfessionForm from '../Components/ConfessionForm';

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

const Container = styled.div`
display: grid;
  grid-template-columns: repeat(2, 1fr); 
  margin-top: 40px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr; 
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

const Button = styled.div`
  text-align: center;
  
  margin: 0px auto;
  border-radius: 30px;
  max-width: 270px;
  background: green;
  color: white;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  // border-radius: 5px;
  cursor: pointer;
  width: 97%;
  margin-top: 10px;
  user-select: none;

`;

const ConfessionPage = () => {

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [users, setUsers] = useState([]);

  const handleClick = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      const response = await fetch('https://v1.nocodeapi.com/sumit2011/google_sheets/olakhZguFbKubafv?tabId=Sheet2');
      const data = await response.json();
      setUsers(data.data);
    }

    fetchData();
  }, []);


  return (
    <MainContainer >
      <Title>
        <h1>Confession Page</h1>

      </Title>

      <Alert>
        <div>
          <h2>Under Upgradation ⚒️</h2>
          <p>It's a confession page here you can confess anything you want.
            but you can only add your confession if you are the member.
            Click on the button to write your confession. 👇
          </p>
        </div>

      </Alert>
      <Button onClick={handleClick}>Add Confession </Button>

      {isFormOpen && <ConfessionForm onClose={handleCloseForm} />}


      <Container>
        {Confessions.map((item) => (
          <ConfessionCard
            {...item}
          />
        )
        )}

        {/* {users.slice().reverse().map((user) => (
          <ConfessionCard
            key={user.row_id} // Ensure that each confession has a unique key
            name={user.name}
            confession={user.confession}
            date={user.date}
          />
        ))} */}
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