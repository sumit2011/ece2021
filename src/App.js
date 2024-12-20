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
import Notfound from './Pages/Notfound';
import DiyaEffect from './Components/Diya';


const Container = styled.div`
  justify-content: center;
`;


const Firework = styled.div`
  position: fixed;
  // z-index: 3000;
  width: 100%;
`;



function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <Container>
      {!location.pathname.startsWith('/user/') && (
        <>
            <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </>
      )}
            {/* <Firework >
            <EmbeddedHtmlPage />
            </Firework> */}
      
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/confessionpage" element={<ConfessionPage />} />
        <Route path='/main' element={<Main />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/help' element={<Help />} />
        <Route path='/discussionpage' element={<DiscussionPage />} />
        <Route path='/user/:userid' element={<UserDetail  />} />
        <Route path='*' element={<Notfound />} />
      </Routes>

      {/* <DiyaEffect /> */}
    </Container>
  );
}




function UserDetail() {
  const { userid } = useParams();
  const user = Datas.find(user => user.userid === userid);

  if (!user) {
    return <Notfound />
  }

  return <UserCard key={user.userid} {...user} />;
}

export default App;




// function EmbeddedHtmlPage() {
//   return (
//     <iframe
//       src="/happy-diwali/dist/index.html" 
//       title="Embedded HTML Page"
//       style={{
//         marginTop: '0px',
//         width: '100%',
//         height: '100vh',
//         border: 'none',
//       }}
//     />
//   );
// }