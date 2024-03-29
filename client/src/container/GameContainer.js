import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getDeck, dealDeck } from '../components/GameService';
import Welcome from '../components/Welcome.js'
import Blackjack from '../components/Blackjack.js'
import Users from '../components/Users.js'
import Instructions from '../components/Instructions';
import { postResult } from '../components/UserService'
import './gamecontainer.css'


const GameContainer = () => {

    const [fullDeck, setFullDeck] = useState([])
    const [playerHand, setPlayerHand] = useState([])
    const [dealerHand, setDealerHand] = useState([])

    const [playerTotal, setPlayerTotal] = useState(0)
    const [dealerTotal, setDealerTotal] = useState(0)

    const [result, setResult] = useState('')
    const [buttons, setButtons] = useState(true)
    const [user, setUser] = useState("")
    const [allUsers, setAllUsers] = useState([])






    useEffect(() => {
        getDeck()
            .then((deck) => {
                setFullDeck(deck.cards)
                getAllUsers()
            })

    }, [])


    useEffect(() => {
        let dealerValue = handValue(dealerHand)
        if (dealerValue <= 21) {
            setDealerTotal(dealerValue)
        }
        else {
            setDealerTotal('Bust')
        }
    }, [dealerHand])



    useEffect(() => {
        if (dealerTotal < 16 && dealerHand.length >= 2) {
            dealerTwist()
        }
        else if (dealerTotal >= 16 || dealerTotal === 'Bust') {
            endGame()
        }

    }, [dealerTotal])


    useEffect(() => {
        let playerValue = handValue(playerHand)
        if (playerValue > 21) {
            setPlayerTotal("Bust")
            dealersTurn()
        } else {
            setPlayerTotal(playerValue)
        }
    }, [playerHand])

    const setNewUser = (newUser) => {
        setUser(newUser)
    }


    const getAllUsers = () => {
        return fetch('http://localhost:9000/api/users')
            .then(res => res.json())
            .then(data => setAllUsers(data))
    }



    const dealCards = () => {

        setButtons(false)

        setResult('')
        setPlayerHand([])
        setDealerHand([])

        const newDeck = [...fullDeck]
        const newPlayerHand = [...playerHand]
        const newDealerHand = [...dealerHand]

        if (playerHand.length < 2 && dealerHand.length < 1) {


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

        for (let card of hand) {
            if (card.value === 'KING' || card.value === 'QUEEN' || card.value === 'JACK') {
                total += 10
            }
            else if (card.value === 'ACE') {
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
        if (playerHand.length >= 2) {

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

        setButtons(true)

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

        if (playerTotal > dealerTotal) {
            setResult('Win')
            postResult({
                name: user.name,
                Result: 'Win'
            })
        }

        else if (playerTotal != 'Bust' && dealerTotal === 'Bust') {
            setResult('Win')
            postResult({
                name: user.name,
                Result: 'Win'
            })

        }

        else if (dealerTotal >= playerTotal || playerTotal === 'Bust') {
            setResult('Lose')
            postResult({
                name: user.name,
                Result: 'Lose'
            })
        }

        else {
            console.log('Error');
            setResult('Error')
        }

    }

    const handleDeal = () => {
        dealCards()
    }

    const handleStick = () => {
        playerStick()
    }

    const handleTwist = () => {
        playerTwist()
    }



    return (
        <div className='mainContainer'>
            <Routes>
                <Route exact path="/" element={< Welcome setNewUser={setNewUser} />} />
                <Route exact path="/blackjack" element={< Blackjack playerHand={playerHand} dealerHand={dealerHand} result={result} handleDeal={handleDeal} handleStick={handleStick} handleTwist={handleTwist} buttons={buttons} user={user} />} />
                <Route exact path="/users" element={< Users allUsers={allUsers} user={user} />} />
            </Routes>
        </div>

    )

};

export default GameContainer;