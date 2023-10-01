import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { getDeck}  from '../components/GameService';
import Welcome from '../components/Welcome.js'
import Blackjack from '../components/Blackjack.js'
import Users from '../components/Users.js'


const GameContainer = () => {

    const [fullDeck, setFullDeck] = useState(52)
    const [playerHand, setPlayerHand] = useState([])
    const [dealerHand, setDealerHand] = useState([])

    useEffect (() => {
        getDeck().then((deck) => {
            setFullDeck(deck)
        })
    })
    
    return (
        <>
        <Router>
            <Routes>
                <Route exact path="/" element={< Welcome />} />
                <Route exact path="/blackjack" element={< Blackjack />} />
                <Route exact path="/users" element={< Users />} />
            </Routes>
        </Router>

        </>
    )
};  

export default GameContainer; 