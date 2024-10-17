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



import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import photo1 from "../Utils/Images/1.png";
import photo2 from "../Utils/Images/54.jpeg";
import photo3 from "../Utils/Images/59.jpeg";
import photo4 from "../Utils/Images/bg.jpeg";
import { Datas } from '../Utils/Data/Data';

const GalleryContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const Img = styled.img`
  max-width: 140px; /* Max width set to 140px */
  height: auto; /* Automatically adjusts height to maintain aspect ratio */
  margin: 5px;
  object-fit: contain; /* Ensures the image fits inside the width without being cropped */
  border: 2px solid rgba(0, 255, 0, 0.5); /* Border around the image */
  border-radius: 10px;
  box-sizing: border-box; /* Includes border in the width calculation */
  cursor: pointer; /* Shows pointer cursor on hover */
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1300px;
`;

const Title = styled.div`
  margin-top: 150px;
  color: white;
  text-align: center;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8); /* Dark transparent background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const FullSizeImg = styled.img`
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
`;

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(null); // Track the current index
  const [startTouch, setStartTouch] = useState({ x: 0, y: 0 }); // Track touch start positions

  const allImages = [...Datas.map((data) => data.image), photo1, photo2, photo3, photo4]; // Combine all images

  // Open the modal with the selected image index
  const openModal = (index) => {
    setCurrentIndex(index);
  };

  // Close the modal
  const closeModal = () => {
    setCurrentIndex(null);
  };

  // Go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % allImages.length);
  };

  // Go to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + allImages.length) % allImages.length);
  };

  // Handle keyboard navigation (for desktop)
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (currentIndex !== null) {
        if (event.key === 'ArrowRight') {
          nextImage();
        } else if (event.key === 'ArrowLeft') {
          prevImage();
        } else if (event.key === 'Escape') {
          closeModal();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex]);

  // Handle touch start (for mobile)
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setStartTouch({ x: touch.clientX, y: touch.clientY });
  };

  // Handle touch move (for mobile)
  const handleTouchMove = (e) => {
    if (!startTouch.x) return;
    const touch = e.touches[0];
    const deltaX = touch.clientX - startTouch.x;
    if (deltaX > 50) {
      // Swipe right
      prevImage();
      setStartTouch({ x: 0, y: 0 }); // Reset after swipe
    } else if (deltaX < -50) {
      // Swipe left
      nextImage();
      setStartTouch({ x: 0, y: 0 }); // Reset after swipe
    }
  };

  return (
    <div>
      <Title>
        <h1>Gallery</h1>
      </Title>

      <GalleryContainer>
        <Container>
          {/* Mapping over the Datas array */}
          {Datas.map((data, index) => (
            <Img
              key={index}
              src={data.image}
              alt={`photo-${index}`}
              onClick={() => openModal(index)}
            />
          ))}

          
        </Container>
      </GalleryContainer>

      {/* Modal for displaying the full-size image */}
      {currentIndex !== null && (
        <ModalOverlay
          onTouchStart={handleTouchStart} // Handle swipe start
          onTouchMove={handleTouchMove}   // Handle swipe move
          onClick={closeModal}            // Close on background click
        >
          <FullSizeImg
            src={allImages[currentIndex]}
            alt="Full-size"
            onClick={(e) => e.stopPropagation()} // Prevents modal from closing when image is clicked
          />
        </ModalOverlay>
      )}
    </div>
  );
};

export default Gallery;
