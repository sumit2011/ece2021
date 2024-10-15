import './App.css';
import NavBar from './Components/Navbar';

import Dashboard from './Pages/Dashboard';
import { useState } from 'react';
import Card from "./Components/Card"
import MainCard from "./Components/MainCard";
import ConfessionCard from './Components/ConfessionCard';
import Main from './Pages/Main';

function App() {

  const [menuOpen , setMenuOpen] = useState(false);

  return (
    <>
      <div className='contain-paint h-full w-full absolute'>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 z-0" />
            {/* Depth elements */}
            <div className="absolute top-20 -left-20 w-64 h-64 bg-neon-green opacity-10 rounded-full filter blur-3xl" />
            <div className="absolute bottom-20 -right-20 w-80 h-80 bg-neon-green opacity-10 rounded-full filter blur-3xl" />
        </div>
        {/* <NavBar 
          menuOpen={menuOpen}
          setMenuOpen= {setMenuOpen}
          setDarkMode = {setDarkMode}
          darkMode = {darkMode}
        /> */}
        <Dashboard />
        <Main />
        <ConfessionCard />
    </>
  );
}

export default App;

