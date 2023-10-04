const Cards = ({playerHand, dealerHand}) => {

  const playerNode = playerHand.map((cards) => {
        return <Cards cards={cards} suit={cards.suit} value={cards.value} image={cards.image}/>
    })

    const dealerNode = dealerHand.map((cards) => {
        return <Cards cards={cards}  value={cards.value} image={cards.image}/>
    })

    return(
        <>
            <h1>Dealer</h1>
                {playerNode}
            <h1>Player</h1>
                {dealerNode}
            </>
    )
}

export default Cards;

