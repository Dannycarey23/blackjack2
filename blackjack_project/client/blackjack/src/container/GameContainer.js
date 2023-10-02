import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { getDeck, dealDeck }  from '../components/GameService';
import Welcome from '../components/Welcome.js'
import Blackjack from '../components/Blackjack.js'
import Users from '../components/Users.js'
// import Cards from '../components/Cards';


const GameContainer = () => {

    const [fullDeck, setFullDeck] = useState([])
    const [playerHand, setPlayerHand] = useState([])
    const [dealerHand, setDealerHand] = useState([])

    useEffect (() => {
        getDeck()
        .then((deck) => {
        setFullDeck(deck.cards)
    })
    

    }, [])

    const dealCards = () => {
        setPlayerHand([])
        setDealerHand([])

        const newDeck = [...fullDeck]
        const newPlayerHand = [...playerHand]
        const newDealerHand = [...dealerHand]

        while (playerHand.length < 2 && dealerHand.length < 2)
            if (playerHand.length === 0){
                const poppedCard = newDeck.pop()
                newPlayerHand.push(poppedCard)
            }

            else if (playerHand.length === 1 && dealerHand.length === 0){
                const poppedCard = newDeck.pop()
                newDealerHand.push(poppedCard)
            }

            else if (playerHand.length === 1 && dealerHand.length === 1){
                const poppedCard = newDeck.pop()
                newPlayerHand.push(poppedCard)
            }

            else {
                const poppedCard = newDeck.pop()
                newDealerHand.push(poppedCard)
            }

            console.log(newPlayerHand.length)
    }

    dealCards();
    
    return (
        <>
        <Router>
            <Routes>
                <Route exact path="/" element={< Welcome />} />
                <Route exact path="/blackjack" element={< Blackjack fullDeck = {fullDeck} />} />
                <Route exact path="/users" element={< Users />} />
            </Routes>
        </Router>

        

        </>
    )
};  

export default GameContainer