import './App.css';
import NavBar from './Components/Navbar';

import Dashboard from './Pages/Dashboard';
import { useState } from 'react';
import ConfessionCard from './Components/ConfessionCard';
import Main from './Pages/Main';
import styled from 'styled-components';
import ConfessionPage from './Pages/ConfessionPage';


const Container = styled.div`
  justify-content: center;
  height: 100%;
  
`;


function App() {

  const [menuOpen , setMenuOpen] = useState(false);

  return (
    <Container>
        <NavBar 
          menuOpen={menuOpen}
          setMenuOpen= {setMenuOpen}
        />
        <Dashboard />
        <Main />
        <ConfessionPage />
        <ConfessionCard />
        
    </Container>
  );
}

export default App;

