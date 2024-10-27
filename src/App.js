import './App.css';
import NavBar from './Components/Navbar';
import { useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation,useParams } from "react-router-dom";

import Dashboard from './Pages/Dashboard';
import Main from './Pages/Main';
import styled from 'styled-components';
import ConfessionPage from './Pages/ConfessionPage';
import Gallery from './Pages/Gallery';
import Help from './Pages/Help';
import DiscussionPage from './Pages/DiscussionPage';
import { Datas } from './Utils/Data/Data';
import UserCard from './Portfolio/UserCard';

const Container = styled.div`
  justify-content: center;
`;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <Container>
      {/* Render NavBar only if the current path is not '/sumit-kumar' */}
      {!location.pathname.startsWith('/user/') && (
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      )}
      
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/confessionpage" element={<ConfessionPage />} />
        <Route path='/main' element={<Main />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/help' element={<Help />} />
        <Route path='/discussionpage' element={<DiscussionPage />} />
        <Route path='/user/:userid' element={<UserDetail  />} />
      </Routes>
    </Container>
  );
}


function UserDetail() {
  const { userid } = useParams();
  const user = Datas.find(user => user.userid === userid);

  if (!user) {
    return <div>User not found</div>;
  }

  return <UserCard key={user.userid} {...user} />;
}

export default App;
