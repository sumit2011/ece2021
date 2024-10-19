import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
  justify-content: center;
  align-items: center;
  width: 80%;
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
  max-width: 400px;
  // width: 350px;
  border: 2px solid #ff1a1a; /* Reddish glowing border */
  box-shadow: 0 0 15px 5px rgba(255, 26, 26, 0.5);
  color: white;
  font-family: Arial, sans-serif;
//   display: flex;
 
  margin-top: 60px;
  margin: 50px auto;
  @media (max-width: 500px){
      margin: 20px;
  }
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

`;


const Help = () => {
    return (
        <Container>
            <Title>
                <h1>Help Page</h1>
            </Title>

            <Alert>
                <div>
                    <h2>Under Production ⚒️</h2>
                    <p>
                        if you click on the button it will send notification to the
                        10 members of this community which is near by you and then
                        they will contact you...
                        <br />
                        also the message will appear here...👇
                    </p>

                </div>

            </Alert>
            <Button>Help Me 😩</Button>
        </Container>

    )
}

export default Help