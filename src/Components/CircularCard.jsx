import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';

const CardMain = styled.div`
`;

const CardOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7); /* Dark background */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div``;


const CircularCard = (props) => {

  const [isCardOpen, setIsCardOpen] = useState(false);

  const handleOpenCard = () => {
    setIsCardOpen(true);
  };

  const handleCloseCard = () => {
    setIsCardOpen(false);
  };

  const handleOverlayClick = () => {
    handleCloseCard();
  };

  const handleCardClick = (e) => {
    e.stopPropagation();
  };

  return (

    <CardMain>
      <img
        src={props.image}
        alt='Circular Card'
        onClick={handleOpenCard}
        style={{
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          border: '4px solid rgba(0, 255, 0, 0.5)',
        }}
      />

      {isCardOpen && (
        <CardOverlay onClick={handleOverlayClick}>
          <CardContainer onClick={handleCardClick}>
            <Card {...props} /> 
          </CardContainer>
        </CardOverlay>
      )}
    </CardMain>
  );
};

export default CircularCard;
