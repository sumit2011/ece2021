import './App.css';
import NavBar from './Components/Navbar';
import { useState } from 'react';

import Dashboard from './Pages/Dashboard';
import Main from './Pages/Main';
import styled from 'styled-components';
import ConfessionPage from './Pages/ConfessionPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gallery from './Pages/Gallery';
import Help from './Pages/Help';


const Container = styled.div`
  justify-content: center;
  // height: 100%;
  
`;


function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  
  if (window.location.pathname !== "/") {
    window.location.replace("/");
  }

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
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/help' element={<Help />} />
        </Routes>
      </Container>
    </BrowserRouter>

  );
}

export default App;

