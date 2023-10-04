import React from 'react';
import Cards from './Cards';
import Instructions from './Instructions';
const Blackjack = ({playerHand, dealerHand, result}) => {
    const playerNode = playerHand.map((card) => {
        return <Cards card={card}/>
    })
    const dealerNode = dealerHand.map((card) => {
        return <Cards card={card} />
    })
    return (
        <>
        <Instructions/>
         <h1>Dealer</h1>
         {dealerNode}
         <h1>Player</h1>
         {playerNode}

        {result}
        </>
     );
}
export default Blackjack;