import WelcomeForm from '../components/WelcomeForm';

const serverURL ='http://localhost:9000/api/blackjack'

const UserService = {

  getRecords() {
  return fetch(serverURL)
  .then(res => res.json())
  },

  addUser(name) {
    return fetch(serverURL, {
    method: 'POST',
    body: JSON.stringify(name),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json());
  },

  updateUser(name) {
    return fetch(serverURL, {
      method: 'PUT',
      body: JSON.stringify(name),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json());
  }

}

export default UserService;