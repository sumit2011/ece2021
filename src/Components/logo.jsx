import React from 'react';
import styled from 'styled-components';

// Styled Components for the card
const CardContainer = styled.div`
  background-color: #152515;
  color: #00ff00;
  border-radius: 25px;
  padding: 15px;
  width: 60px;
  font-family: 'Arial', sans-serif;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  margin: 200px;
  border: 2px solid rgba(0, 255, 0, 0.5);
  box-shadow: 0 0 15px rgba(0, 255, 0, 0.3);
  display: flex;
  justify-content: center;
  text-align: center;

`;

const Logo = styled.div`
  display: grid;
  align-items: center;
`;


const LogoText = styled.span`
  font-size: 28px;
  font-weight: bold;
  color: #FFD700; /* Yellow */

`;

const SubLogoText = styled.span`
  color: #FF1493; /* Pink for  */
  font-size: 24px;
  font-weight: bold;
//   margin-left: 10px;
`;


const logo = (props) => {
  return (
    <CardContainer>
      <Logo  >
          <LogoText >
            ECE
          </LogoText>
          <SubLogoText>2021</SubLogoText>
        </Logo>
    </CardContainer>
  );
};
export default logo;