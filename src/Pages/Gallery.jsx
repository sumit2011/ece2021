import React from 'react'
import styled from 'styled-components';

import photo1  from "../Utils/Images/1.png";
import photo2 from "../Utils/Images/54.jpeg";
import photo3 from "../Utils/Images/59.jpeg";
import photo4 from "../Utils/Images/30.jpeg";


const GalleryContainer= styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;


const Img = styled.img`
  display: flex;
  border: 2px solid rgba(0, 255, 0, 0.5);
  border-radius: 10px;
  padding: 5px;
  max-width: 140px;
  max-height: 140px;
  margin: 5px;
  
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  // margin: 20px;
  justify-content: center;
  // width: 80%;
  max-width: 1300px;
`;

const Title = styled.div`
margin-top: 150px;
  color: white;
    text-align: center;

`;

const Gallery = () => {
  return (
    <div>
    <Title><h1>Gallery</h1></Title>

    <GalleryContainer>
     
      {/*  */}
      
{/* 
      <Alert>
        coming soon

      </Alert> */}
      <Container>
      <Img src={photo1} alt='photo' />
      <Img src={photo2} alt='photo' />
      <Img src={photo3} alt='photo' />
      <Img src={photo4} alt='photo' />
      <Img src={photo1} alt='photo' />
      <Img src={photo2} alt='photo' />
      <Img src={photo3} alt='photo' />
      <Img src={photo4} alt='photo' />
      <Img src={photo1} alt='photo' />
      <Img src={photo2} alt='photo' />
      <Img src={photo3} alt='photo' />
      <Img src={photo4} alt='photo' />
      <Img src={photo1} alt='photo' />
      <Img src={photo2} alt='photo' />
      <Img src={photo3} alt='photo' />
      <Img src={photo4} alt='photo' />
      
      </Container>
      
          
    </GalleryContainer>
    </div>

  )
}

export default Gallery