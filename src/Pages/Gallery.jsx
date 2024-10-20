import React, { useState } from "react";
import { Gallery } from "react-grid-gallery";
import styled from 'styled-components';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";



const images = [
  {
    src: require("../Utils/Photos/1.jpg"),
    original: require("../Utils/Photos/1.jpg"),
    width: 420,
    height: 274,
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
    height: 400,
    caption: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: require("../Utils/Photos/3.jpg"),
    original: require("../Utils/Photos/3.jpg"),
    width: 520,
    height: 312,
    caption: "Color Pencils (Jeshu John - designerspics.com)",
  },
  {
    src: require("../Utils/Photos/9.jpg"),
    original: require("../Utils/Photos/9.jpg"),
    width: 320,
    height: 213,
    caption: "Red Apples with other Red Fruit (foodiesfeed.com)",
  },
  {
    src: require("../Utils/Photos/5.jpg"),
    original: require("../Utils/Photos/5.jpg"),
    width: 560,
    height: 683,
    caption: "37H (gratispgraphy.com)",
  },
  {
    src: require("../Utils/Photos/10.jpg"),
    original: require("../Utils/Photos/10.jpg"),
    width: 440,
    height: 320,
    tags: [{ value: "Nature", title: "Nature" }],
    caption: "8H (gratisography.com)",
  },
  {
    src: require("../Utils/Photos/11.jpg"),
    original: require("../Utils/Photos/11.jpg"),
    width: 320,
    height: 190,
    caption: "286H (gratisography.com)",
  },
  {
    src: require("../Utils/Photos/12.jpg"),
    original: require("../Utils/Photos/12.jpg"),
    width: 320,
    height: 148,
    tags: [{ value: "Class", title: "Class" }],
    caption: "315H (gratisography.com)",
  },
  {
    src: require("../Utils/Photos/14.jpg"),
    original: require("../Utils/Photos/14.jpg"),
    width: 420,
    height: 613,
    caption: "201H (gratisography.com)",
  },
  {
    src: require("../Utils/Photos/15.jpg"),
    original: require("../Utils/Photos/15.jpg"),
    width: 620,
    height: 413,
    caption: "201H (gratisography.com)",
  },
  {
    src: require("../Utils/Photos/16.jpg"),
    original: require("../Utils/Photos/16.jpg"),
    width: 320,
    height: 613,
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
        plugins={[Zoom,Fullscreen]}
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // plugins={[Fullscreen]}
      />
    </Container>

    </GalleryContainer>
    
  );
};

export default GalleryImages;
