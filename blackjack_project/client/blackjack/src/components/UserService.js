const serverURL ='http://localhost:9000/api/blackjack'


export const getRecords = (() => {
  return fetch(serverURL)
  .then(res => res.json())
})