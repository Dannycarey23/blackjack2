const baseURL ='https://www.deckofcardsapi.com/api/deck/new/draw/?count=52'
// const deckID = getDeck.deck_id


export const getDeck = (() => {
  return fetch(baseURL)
  .then(res => res.json())
})

export const dealDeck = ((deckID) => {
    
    return fetch(`https://www.deckofcardsapi.com/api/deck/${deckID}/draw/?count=52`)
    .then(res => res.json())
})