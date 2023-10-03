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

    const [playerTotal, setPlayerTotal] = useState(0)
    const [dealerTotal, setDealerTotal] = useState(0)

    const [result, setResult] = useState('')



    useEffect (() => {
        getDeck()
        .then((deck) => {
        setFullDeck(deck.cards)
    })
    
    }, [])


    useEffect(() => {
    let dealerValue = handValue(dealerHand)
    if(dealerValue <= 21){
    setDealerTotal(dealerValue)
    } 
    else {
        setDealerTotal('Bust')
    }}, [dealerHand])



    useEffect(() => {
    if(dealerTotal < 16 && dealerHand.length >= 2){
        dealerTwist()}
    else if(dealerTotal >= 16 || dealerTotal === 'Bust'){
        endGame();
    }
        
    }, [dealerTotal])


    useEffect(() => {
    let playerValue = handValue(playerHand)
      if (playerValue > 21){
        setPlayerTotal("Bust")
        dealersTurn()
     }else{
        setPlayerTotal(playerValue)
     }
    }, [playerHand])





    const dealCards = () => { 

        setPlayerHand([])
        setDealerHand([])

        const newDeck = [...fullDeck]
        const newPlayerHand = [...playerHand]
        const newDealerHand = [...dealerHand]

        if (playerHand.length < 2 && dealerHand.length < 1){
       

            let poppedCard = newDeck.pop()
            newPlayerHand.push(poppedCard)
            setPlayerHand(newPlayerHand)


            let poppedCard2 = newDeck.pop()
            newDealerHand.push(poppedCard2)
            setDealerHand(newDealerHand)

            let poppedCard3 = newDeck.pop()
            newPlayerHand.push(poppedCard3)
            setPlayerHand(newPlayerHand)

        }

        setFullDeck(newDeck)

    }

    const handValue = (hand) => {
        let total = 0

        for (let card of hand){
            if (card.value ===  'KING' || card.value === 'QUEEN' || card.value === 'JACK'){
                total += 10
            }
            else if (card.value === 'ACE'){
                total += 11
            }

            else {
            total += parseInt(card.value)
        } 

    }

    console.log(total);
    return total

}


    const playerTwist = () => {
        if (playerHand.length >= 2){
            
        let newDeck = [...fullDeck]
        let newPlayerHand = [...playerHand]

        let poppedCard = newDeck.pop()
        newPlayerHand.push(poppedCard)

        setPlayerHand(newPlayerHand)
        setFullDeck(newDeck)

    }
}

    const playerStick = () => {
        dealersTurn()
    }

    const dealersTurn = () => {

        const newDeck = [...fullDeck]
        const newDealerHand = [...dealerHand]

        let poppedCard2 = newDeck.pop()
        newDealerHand.push(poppedCard2)
        setDealerHand(newDealerHand)

    }


    const dealerTwist = () => {
        
        let newDeck = [...fullDeck]
        let newDealerHand = [...dealerHand]

        let poppedCard = newDeck.pop()
        newDealerHand.push(poppedCard)

        setDealerHand(newDealerHand)
        setFullDeck(newDeck)

    }

    const endGame = () => {
        console.log(`player total is ${playerTotal}`);
        console.log(`dealer total is ${dealerTotal}`);

        if(playerTotal > dealerTotal){
            console.log('Player wins!')
            setResult('Player wins!')
        }

        else if (playerTotal != 'Bust' && dealerTotal === 'Bust'){
            console.log('Player wins!')
            setResult('Player wins!')

        }

        else if (dealerTotal >= playerTotal || playerTotal === 'Bust'){
            console.log('Dealer Wins!')
            setResult('Dealer Wins!')
        }

        else { console.log('Error');
        setResult('Error')}

      
    }




    
    return (
        <>
        <Router>
            <button onClick={dealCards}>Deal </button>
            <button onClick={playerStick} disabled = {!result}>Stick</button>
            <button onClick={playerTwist}>Twist</button>
            <Routes>
                <Route exact path="/" element={< Welcome />} />
                <Route exact path="/blackjack" element={< Blackjack playerHand = {playerHand} dealerHand = {dealerHand} result = {result} />} />
                <Route exact path="/users" element={< Users />} />
            </Routes>
        </Router>

        

        </>
    )
};  

export default GameContainer