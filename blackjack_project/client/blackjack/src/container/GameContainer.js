import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { getDeck, dealDeck }  from '../components/GameService';
import Welcome from '../components/Welcome.js'
import Blackjack from '../components/Blackjack.js'
import Users from '../components/Users.js'
import Instructions from '../components/Instructions';
// import Cards from '../components/Cards';


const GameContainer = () => {

    const [fullDeck, setFullDeck] = useState([])
    const [playerHand, setPlayerHand] = useState([])
    const [dealerHand, setDealerHand] = useState([])

    useEffect (() => {
        getDeck()
        .then((deck) => {
        //     console.log(deck.deck_id)
         dealDeck(deck.deck_id)
         })
        .then((res) => {
            console.log(res);
        //     setFullDeck(res)
        
    })
    }, [])
    
    return (
        <>
        <Router>
            <Routes>
                <Route exact path="/" element={< Welcome />} />
                <Route exact path="/blackjack" element={< Blackjack fullDeck = {fullDeck} element={<Instructions/>}/>} />
                <Route exact path="/users" element={< Users />} />
            </Routes>
        </Router>

        

        </>
    )
};  

export default GameContainer