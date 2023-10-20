import React, {useState} from 'react';
import GameContainer from './container/GameContainer'
import NavBar from './components/NavBar';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  
  return (

    <>
    <Router>
    <NavBar />
    <GameContainer/>
    </Router>
    </>

  );
}

export default App;


