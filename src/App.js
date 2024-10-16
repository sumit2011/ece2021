import './App.css';
import NavBar from './Components/Navbar';
import { useState } from 'react';

import Dashboard from './Pages/Dashboard';
import Main from './Pages/Main';
import styled from 'styled-components';
import ConfessionPage from './Pages/ConfessionPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";


const Container = styled.div`
  justify-content: center;
  height: 100%;
  
`;


function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <Container>
        <NavBar
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/confessionpage" element={<ConfessionPage />} />
          <Route path='/main' element={<Main />} />
        </Routes>
      </Container>
    </BrowserRouter>

  );
}

export default App;

