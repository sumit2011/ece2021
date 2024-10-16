import './App.css';
import NavBar from './Components/Navbar';

import Dashboard from './Pages/Dashboard';
import { useState } from 'react';
import ConfessionCard from './Components/ConfessionCard';
import Main from './Pages/Main';
import styled from 'styled-components';
import ConfessionPage from './Pages/ConfessionPage';
import { BrowserRouter , Route ,Routes } from "react-router-dom";


const Container = styled.div`
  justify-content: center;
  height: 100%;
  
`;


function App() {

  const [menuOpen , setMenuOpen] = useState(false);

  return (
    <BrowserRouter>
    <Container>
        <NavBar 
          menuOpen={menuOpen}
          setMenuOpen= {setMenuOpen}
        />
        
        {/* <ConfessionCard /> */}
        <Routes>
            <Route path="/" exact element = {<Dashboard/>} />
            <Route path="/confessionpage" exact element = {<ConfessionPage/>} />
            <Route path='/main' exact element = {<Main />} />
        </Routes>
        {/* <Dashboard />
        <Main />
        <ConfessionPage /> */}
    </Container>
    </BrowserRouter>
    
  );
}

export default App;

