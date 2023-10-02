import React from 'react';
import Cards from './Cards';

const Blackjack = ({fullDeck}) => {
    
    // console.log(fullDeck);

    const cardNode = fullDeck.map((cards) => {
        return <Cards cards={cards} suit={cards.suit} value={cards.value} image={cards.image}/>
    })
    
    
    
    return ( 
        <>
         {cardNode}
        </>
     );
}

export default Blackjack;