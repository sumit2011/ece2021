import React from 'react'
import styled from 'styled-components';

const SidebarContainer = styled.div``;

const SidebarDiv = styled.nav`

  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8));
  padding: 10px 20px;
  border-radius: 50px;
  border: 2px solid rgba(0, 255, 0, 0.5);
  width: 80%;
  height: 30px;
  margin: 20px auto;
  box-shadow: 0 0 15px rgba(0, 255, 0, 0.3);
  z-index: 1000; 
  color: white;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarDiv >
        Add Yours
      </SidebarDiv>

      <SidebarDiv >
        Help
      </SidebarDiv>

      <SidebarDiv >
        Confession
      </SidebarDiv>

      <SidebarDiv >
        All Students
      </SidebarDiv>
     

    </SidebarContainer>
  )
}

export default Sidebar