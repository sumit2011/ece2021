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
`;


const Help = () => {
    return (
        <Container>
            <div>
                <Alert>
                    <div>
                        <h2>help page</h2>
                        <p>
                            coming soon...
                        </p>

                    </div>
                </Alert>
            </div>
        </Container>

    )
}

export default Help