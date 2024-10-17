import React from 'react'
import styled from 'styled-components';

const GalleryContainer= styled.div`
  margin-top: 150px;
  color: white;
  text-align: center;
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
`;


const Gallery = () => {
  return (
    <GalleryContainer>
      <h1>Galley</h1>
      <Alert>
        <div>
          <h2>Coming soon....</h2>
          <p>
            
          </p>
        </div>

      </Alert>
    </GalleryContainer>
  )
}

export default Gallery