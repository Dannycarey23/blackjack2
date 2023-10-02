import React from 'react';
import Cards from './Cards';

const Blackjack = ({playerHand, dealerHand}) => {
    
    // console.log(fullDeck);

    const playerNode = playerHand.map((cards) => {
        return <Cards cards={cards} suit={cards.suit} value={cards.value} image={cards.image}/>
    })

    const dealerNode = dealerHand.map((cards) => {
        return <Cards cards={cards} suit={cards.suit} value={cards.value} image={cards.image}/>
    })
    
    
    
    return ( 
        <>
        <h1>Player</h1>
         {playerNode}


         <h1>Dealer</h1>
         {dealerNode}


        </>
     );
}

export default Blackjack;