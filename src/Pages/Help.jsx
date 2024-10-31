import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
  position: relative;  // for the fireworks happy diwali effect

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
  user-select: none;

`;

const Alert2 = styled.div`
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

            <Title><h2>Community Features</h2></Title>

            <Alert2>
                <div>
                    <h2>Stay Connected 📢</h2>
                    <p style={{textAlign: "justify"}}>
                        Stay conected so that we can help each other in the future.
                        So don't forget to join the community.
                    </p>
                </div>
            </Alert2>
            <Alert2>
                <div>
                    <h2>The Confession Page 🙊</h2>
                    <p style={{textAlign: "justify"}}>
                        It offers a space for individuals to share personal
                        thoughts or experiences, often anonymously. It provides a judgment-free
                        zone for expressing emotions or secrets.
                    </p>
                </div>
            </Alert2>
            <Alert2>
                <div>
                    <h2>Interactive Discussions 💬</h2>
                    <p style={{textAlign: "justify"}}>
                        It allows to engage in conversations on various topics,
                        sharing ideas, opinions, and insights. Also contribute your own thoughts.
                    </p>
                </div>
            </Alert2>
            <Alert2>
                <div >
                    <h2>App like feature 📲</h2>
                    <p style={{textAlign: "justify"}}>
                        It's a webapp so it will take only 5 to 10kb and it has
                        many feature like interactive dashboard, also send notification
                        on every update.
                        <br />
                        <br/>
                        <strong>
                            To install the app, click on the three dots in the browser
                            on the upper right corner, and then click on "Add to Home Screen."
                        </strong>

                    </p>
                </div>
            </Alert2>
        </Container>

    )
}

export default Help