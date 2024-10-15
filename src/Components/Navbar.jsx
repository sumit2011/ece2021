import React from 'react'
import styled from 'styled-components';
import {IconButton} from "@mui/material";
import {Menu } from "@mui/icons-material"; 
import { DarkModeRounded, LightModeRounded } from "@mui/icons-material";


const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px 40px;
    align-items: center;
    color: ${({ theme }) => theme.text_primary};
    background: ${({ theme }) => theme.bgLight};
    // background: white;
    gap: 30px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.7px);
    -webkit-backdrop-filter: blur(5.7px);
    @media (max-width: 768px){
        height: 40px;
        padding: 16px;
        gap: 0px;
    }
`;
const IconBtn = styled(IconButton)`
    cursor: pointer;
    color: ${({ theme }) => theme.text_secondary} !important;

`;
const Elements = styled.div`
    padding: 4px 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    color: ${({ theme }) => theme.text_secondary};

`;

const Navbar = ({setMenuOpen , menuOpen, setDarkMode, darkMode}) => {
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
  
    return (
    <NavbarContainer>
        <IconBtn onClick={() => setMenuOpen(!menuOpen)}>
            <Menu />
        </IconBtn>
        <h2>ECE 2021</h2>
        
        <Elements onClick={toggleDarkMode}>
                {darkMode ? <LightModeRounded /> : <DarkModeRounded />}
        </Elements>

        
        

    </NavbarContainer>
  )
}

export default Navbar;