import React from "react";
import styled, { keyframes } from "styled-components";

// Keyframes for the flicker effect
const flicker = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.85;
  }
`;

// Styled Components
const DiyaContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
`;

const DiyaWrapper = styled.div`
  position: relative;
  width: 30px;
  height: 60px;
`;

const Flame = styled.div`
  position: absolute;
  bottom: 25px;
  left: 7px;
  width: 16px;
  height: 30px;
  background: #ffa500;
  border-radius: 50%;
  animation: ${flicker} 1s infinite;
`;

const InnerFlame = styled.div`
  position: absolute;
  bottom: 5px;
  left: 4px;
  width: 8px;
  height: 15px;
  background: #ffd700;
  border-radius: 50%;
`;

const OuterFlame = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 16px;
  height: 30px;
  background: rgba(255, 165, 0, 0.6);
  border-radius: 50%;
  animation: ${flicker} 1.5s infinite;
`;

const Wick = styled.div`
  position: absolute;
  bottom: 20px;
  left: 12px;
  width: 4px;
  height: 10px;
  background: black;
`;

const Base = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 15px;
  background: #8b4513;
  border-radius: 15px 15px 0 0;
`;

// Main Component
const DiyaEffect = () => {
  return (
    <DiyaContainer>
      <DiyaWrapper>
        <Flame>
          <InnerFlame />
          <OuterFlame />
        </Flame>
        <Wick />

        
        <Base />
      </DiyaWrapper>
    </DiyaContainer>
  );
};

export default DiyaEffect;
