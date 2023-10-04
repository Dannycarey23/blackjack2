import WelcomeForm from '../components/WelcomeForm';

const serverURL ='http://localhost:9000/api/users'


  export const getUsers = (() => {
  return fetch(serverURL)
  .then(res => res.json())
  });

  export const  addUser =((name) => {
    return fetch(serverURL, {
    method: 'POST',
    body: JSON.stringify(name),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json());
  });

   export const updateUser =((name) => {
    return fetch(serverURL, {
      method: 'PUT',
      body: JSON.stringify(name),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json());

  });
