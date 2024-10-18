import React, { useState } from "react";
import { Gallery } from "react-grid-gallery";
import styled from 'styled-components';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { ThumbnailImageProps } from "react-grid-gallery";
 



const images = [
  {
    src: require("../Utils/Photos/1.jpg"),
    original: require("../Utils/Photos/1.jpg"),
    width: 320,
    height: 174,
    tags: [
      { value: "Fresher", title: "Fresher" },
      { value: "Party", title: "Party" },
    ],
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  // Add more images as needed
  {
    src: require("../Utils/Photos/2.jpg"),
    original: require("../Utils/Photos/2.jpg"),
    width: 320,
    height: 212,
    caption: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: require("../Utils/Photos/5.jpg"),
    original: require("../Utils/Photos/5.jpg"),
    width: 320,
    height: 512,
    caption: "Color Pencils (Jeshu John - designerspics.com)",
  },
  {
    src: require("../Utils/Photos/7.jpg"),
    original: require("../Utils/Photos/7.jpg"),
    width: 320,
    height: 213,
    caption: "Red Apples with other Red Fruit (foodiesfeed.com)",
  },
  {
    src: require("../Utils/Photos/8.jpg"),
    original: require("../Utils/Photos/8.jpg"),
    width: 320,
    height: 183,
    caption: "37H (gratispgraphy.com)",
  },
  {
    src: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg",
    original: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg",
    width: 240,
    height: 320,
    tags: [{ value: "Nature", title: "Nature" }],
    caption: "8H (gratisography.com)",
  },
  {
    src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
    original: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
    width: 320,
    height: 190,
    caption: "286H (gratisography.com)",
  },
  {
    src: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg",
    original: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg",
    width: 320,
    height: 148,
    tags: [{ value: "People", title: "People" }],
    caption: "315H (gratisography.com)",
  },
  {
    src: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
    original: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
    width: 320,
    height: 213,
    caption: "201H (gratisography.com)",
  },
];


const GalleryContainer = styled.div`
  
  
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 120px auto;
  @media (max-width: 550px){
     width: 100%;
  }

`;

const Title = styled.div`
margin-top: 110px;
color: white;
text-align: center;
`;

const Container = styled.div`
  margin: 10px;
  background-color: #152515;
  color: #00ff00;
  padding: 10px;
  box-shadow: 0 0 15px rgba(0, 255, 0, 0.3);
  border-radius: 15px;
  

`;

const slides = images.map(({ original, width, height }) => ({
  src: original,
  width,
  height,
}));

const GalleryImages = () => {
  const [index, setIndex] = useState(-1);

  const handleClick = (index, item) => setIndex(index);

  return (
    <GalleryContainer >
      <Title>
      <h1>Gallery</h1>
      </Title>
      
    <Container>
      
      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
        margin={5} 
        
      />
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </Container>

    </GalleryContainer>
    
  );
};

export default GalleryImages;
