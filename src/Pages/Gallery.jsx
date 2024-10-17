import React from 'react'

import ImageGallery from "react-image-gallery";

 
import "react-image-gallery/styles/css/image-gallery.css";
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 150px;
  display: flex;
  margin: 120px auto;
  justify-content: center;

  color: white;
  text-align: center;

`;


const Gallery = () => {

  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  
  return (
    <Container >
      <div>
      <h1>Gallery</h1>
      <div style={{margin: "40px"}}>
      <ImageGallery items={images}  />
      </div>
      
      </div>
      
    </Container>
  )
}

export default Gallery


// import React from 'react'
// import styled from 'styled-components';

// import photo1  from "../Utils/Images/1.png";
// import photo2 from "../Utils/Images/54.jpeg";
// import photo3 from "../Utils/Images/59.jpeg";
// import photo4 from "../Utils/Images/bg.jpeg";
// import { Datas } from '../Utils/Data/Data';


// const GalleryContainer= styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 40px;
// `;


// const Img = styled.img`
//   display: flex;
  
//   padding: 5px;
//   width: 140px; /* Fixed width */
//   height: auto; /* Automatically adjusts height to maintain the aspect ratio */
//   margin: 5px;
//   object-fit: contain; /* Ensures the image fits inside the width and height without being cropped */
//   border: 2px solid rgba(0, 255, 0, 0.5);
//   border-radius: 10px;
// `;

// const Container = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   max-width: 1300px;
// `;

// const Title = styled.div`
// margin-top: 150px;
//   color: white;
//     text-align: center;

// `;

// const Gallery = () => {
//   return (
//     <div>
//     <Title><h1>Gallery</h1></Title>

//     <GalleryContainer>
     

//       <Container>
//         {Datas.map ((data) => (
//           <Img src={data.image} alt='photo' />
//         ))};
      
//       <Img src={photo1} alt='photo' />
//       <Img src={photo2} alt='photo' />
//       <Img src={photo3} alt='photo' />
//       <Img src={photo4} alt='photo' />
//       </Container>
//     </GalleryContainer>
//     </div>

//   )
// }

// export default Gallery


