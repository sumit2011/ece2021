import React, { useState } from 'react';
import styled from 'styled-components';
import { Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8));
  padding: 10px 20px;
  border-radius: 50px;
  border: 2px solid rgba(0, 255, 0, 0.5);
  width: 80%;
  margin: 20px auto;
  box-shadow: 0 0 15px rgba(0, 255, 0, 0.3);
  z-index: 1000; 
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;


const LogoText = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #FFD700; /* Yellow */
  margin-left: 10px;
`;

const SubLogoText = styled.span`
  color: #FF1493; /* Pink for  */
  font-size: 18px;
  margin-left: 4px;
`;

const NavButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const MenuBtn = styled.button`
  background: transparent;
  color: #fff;
  border: none;
  border-radius: 25px;
  padding: 8px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const SidebarDiv = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9));
  padding: 10px 20px;
  border-radius: 20px;
  border: 2px solid rgba(0, 255, 0, 0.5);
  width: 80%;
  height: 30px;
  margin: 4px auto;
  box-shadow: 0 0 15px rgba(0, 255, 0, 0.3);
  z-index: 1000; 
  color: white;
  font-size: 20px;
  font-weight: bold;
`;


const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(${props => (props.show ? "0" : "-200%")});
  transition: transform 0.5s ease-in-out; /* Smooth transition */
  z-index: 999;
  margin-top: 100px;
  // background: red;
`;


const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  const closeMenu = () => {
    setShowMenu(false);
  }

  return (
    <div>

      <NavbarContainer>
        <Logo>
          <LogoText>
            ECE<SubLogoText>2021</SubLogoText>
          </LogoText>
        </Logo>
        <NavButtons>
          <MenuBtn onClick={toggleMenu} >
            <Menu style={{ color: "#fff" }} />
          </MenuBtn>

        </NavButtons>
      </NavbarContainer>

      <SidebarContainer show={showMenu} >

        <Link to="/" style={{ textDecoration: "none", color: "white", width: "100%" }}  onClick={closeMenu}>
          <SidebarDiv>Gallery 📷</SidebarDiv>
        </Link>

        <Link to="/main" style={{ textDecoration: "none", color: "white", width: "100%" }}  onClick={closeMenu}>
          <SidebarDiv>Help ❤️</SidebarDiv>
        </Link>

        <Link to="/confessionpage" style={{ textDecoration: "none", color: "white", width: "100%" }}  onClick={closeMenu}>
          <SidebarDiv>Confession  🫣</SidebarDiv>
        </Link>


        <Link to="/main" style={{ textDecoration: "none", color: "white", width: "100%" }}  onClick={closeMenu}>
          <SidebarDiv>Members</SidebarDiv>
        </Link>

      </SidebarContainer>

    </div>

  );
};

export default Navbar;
