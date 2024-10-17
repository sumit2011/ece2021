import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
    margin-top: 150px;
    color:white;
    text-align: center;
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
  display: flex;
  margin: 100px auto;
  margin: 20px;
  margin-top: 60px;
`;

const Button = styled.div`
  background: green;
  height: 35px;
  border-radius: 30px;
  justify-content: center;
  text-align: center;
  color: white;
  padding-top: 5px;
  width: 270px;
  margin: 0px auto;
  font-size: 22px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 40px;
`;


const Help = () => {
    return (
        <Container>
            <h1>Help Page</h1>
            <div>
                <Alert>
                    <div>
                        <h2>Under Production ⚒️</h2>
                        <p>
                           if you click on the button it will send notification to the 
                           10 members of this community which is near by you and then
                           they will contact you...
                           <br/>
                           also the message will appear here...👇
                        </p>

                    </div>
                    
                </Alert>
                <Button>Click Me</Button>
            </div>
        </Container>

    )
}

export default Help