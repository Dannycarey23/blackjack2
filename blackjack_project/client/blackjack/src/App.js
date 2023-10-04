import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import GameContainer from './container/GameContainer'
import NavBar from './components/NavBar';
import Blackjack from './components/Blackjack';
import WelcomeForm from './components/WelcomeForm';
import Welcome from './components/Welcome';
import Users from './components/Users';
import './App.css';


function App() {
  return (
    <>
      <NavBar/>
      <GameContainer/>
      <Router>
            <Routes>
                <Route exact path="/" element={< Welcome />} />
                <Route exact path="/blackjack" element={< Blackjack />} />
                <Route exact path="/users" element={< Users />} />
            </Routes>
        </Router>
    </>
 

  );
}

export default App;
