import React from 'react'
import styled from 'styled-components';

import photo1  from "../Utils/Images/1.png";
import photo2 from "../Utils/Images/54.jpeg";
import photo3 from "../Utils/Images/59.jpg";
import photo4 from "../Utils/Images/bg.jpeg";


const GalleryContainer= styled.div`
  margin-top: 150px;
  color: white;
  text-align: center;
  // display: flex;
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

const Img = styled.img`
  display: flex;
  border: 2px solid rgba(0, 255, 0, 0.5);
  border-radius: 10px;
  padding: 5px;
  max-width: 140px;
  margin: 5px;
  
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  // margin: 20px;
  justify-content: center;
`;

const Gallery = () => {
  return (
    <GalleryContainer>
      <h2>Gallery</h2>
{/* 
      <Alert>
        coming soon

      </Alert> */}
      <Container>
      <Img src={photo1} alt='photo' />
      <Img src={photo2} alt='photo' />
      <Img src={photo3} alt='photo' />
      <Img src={photo4} alt='photo' />
      </Container>
      
          
    </GalleryContainer>
  )
}

export default Gallery