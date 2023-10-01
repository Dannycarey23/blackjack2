const baseURL ='https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'

export const getDeck = (() => {
  return fetch(baseURL)
  .then(res => res.json())
})