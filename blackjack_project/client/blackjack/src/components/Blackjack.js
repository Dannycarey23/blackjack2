import React from 'react';
import Cards from './Cards';

const Blackjack = ({playerHand, dealerHand, result}) => {
    
    const playerNode = playerHand.map((cards) => {
        return <Cards cards={cards}/>
    })

    const dealerNode = dealerHand.map((cards) => {
        return <Cards cards={cards} />
    })
    
    
    
    return ( 
        <>
        <h1>Player</h1>
         {playerNode}

         {result}


         <h1>Dealer</h1>
         {dealerNode}


        </>
     );
}

export default Blackjack;