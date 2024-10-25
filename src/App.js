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
import DiscussionPage from './Pages/DiscussionPage';

import { Datas } from './Utils/Data/Data';

// import Logo from "./Components/logo";
import UserCard from './Pages/UserCard';

const Container = styled.div`
  justify-content: center;
  // height: 100%;
  
`;



function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  
  const sumit = Datas[0];

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
          <Route path='/discussionpage' element={<DiscussionPage />} />
          
          <Route path='/sumit-kumar' element={<UserCard {...sumit} />} />

        </Routes>
       
      </Container>
    </BrowserRouter>

  );
}

export default App;

