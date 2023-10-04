import React from 'react';
import Cards from './Cards';
import Instructions from './Instructions';

const Blackjack = ({playerHand, dealerHand, result}) => {
    
    const playerNode = playerHand.map((cards) => {
        return <Cards cards={cards}/>
    })

    const dealerNode = dealerHand.map((cards) => {
        return <Cards cards={cards} />
    })
    
    
    
    return ( 
        <>
        <Instructions/>
        <h1>Player</h1>
         {playerNode}

         {result}


         <h1>Dealer</h1>
         {dealerNode}


        </>
     );
}

export default Blackjack;