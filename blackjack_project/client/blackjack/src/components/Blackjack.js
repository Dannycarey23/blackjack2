import React from 'react';
import Cards from './Cards';

const Blackjack = ({playerHand, dealerHand}) => {
    
    // console.log(fullDeck);

    const playerNode = playerHand.map((cards) => {
        return <Cards cards={cards} suit={cards.suit} value={cards.value} image={cards.image}/>
    })

    const dealerNode = dealerHand.map((cards) => {
        return <Cards cards={cards}  value={cards.value} image={cards.image}/>
    })
    
    // const handleClick = (event) => dealCards();
    // const playerStick = (event) => dealCards();
    // const playerTwist = (event) => dealCards();
    
    
    return ( 
        <>
        <h1>Dealer</h1>
         {playerNode}


        <h1>Player</h1>
         {dealerNode}
        {/* <form>
        <button onClick={dealCards}>Deal </button>
        <button onClick={playerStick}>Stick</button>
        <button onClick={playerTwist}>Twist</button>
        </form> */}


        </>
     );
}

export default Blackjack;