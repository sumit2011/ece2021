import React from 'react';
import styled from 'styled-components';

// Styled Components for the card
const CardContainer = styled.div`
  background-color: #152515;
  color: #00ff00;
  border-radius: 15px;
  padding: 20px;
  max-width: 400px;
  font-family: 'Arial', sans-serif;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  margin: 20px auto;
  border: 2px solid rgba(0, 255, 0, 0.5);
`;

const TitleSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const Icon = styled.div`
  font-size: 30px;
  color: #00ff00;
  margin-right: 15px;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #00ff00;
`;

const Description = styled.p`
  font-size: 16px;
  color: #d0ffd0;
  line-height: 1.5;
`;


const ConfessionCard = () => {
  return (
    <CardContainer>
      <TitleSection>
        <Icon>📊</Icon> {/* Replace this with an actual icon or SVG if needed */}
        <Title>Interactive Dashboard</Title>
      </TitleSection>
      <Description>
        Explore real-time data and analytics on your chess performance, predictions, and community engagement.
      </Description>
    </CardContainer>
  );
};
export default ConfessionCard;