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
       

        while (newPlayerHand.length < 2 && newDealerHand.length < 2){

            let poppedCard = newDeck.pop()
            console.log(poppedCard);
            newPlayerHand.push(poppedCard)
            setPlayerHand(newPlayerHand)


            let poppedCard2 = newDeck.pop()
            newDealerHand.push(poppedCard2)
            setDealerHand(newDealerHand)

            

        }

        setFullDeck(newDeck)

        console.log(playerHand);
        console.log(dealerHand);

    }




    
    return (
        <>
        <Router>
            <button onClick={dealCards}>Deal </button>
            <Routes>
                <Route exact path="/" element={< Welcome />} />
                <Route exact path="/blackjack" element={< Blackjack playerHand = {playerHand} dealerHand = {dealerHand} />} />
                <Route exact path="/users" element={< Users />} />
            </Routes>
        </Router>

        

        </>
    )
};  

export default GameContainer