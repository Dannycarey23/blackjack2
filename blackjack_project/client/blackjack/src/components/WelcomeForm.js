import React, {useState} from 'react';
import UserService from './UserService';


const WelcomeForm = ({setNewUser}) => {

    const[name, setName] = useState('');

    const handleNameChange = (event) => setName(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        UserService.addUser({
            name: name,
        })
        setNewUser({name: name})
        setName('');
    }


    const handleClick = (event) => {
        event.preventDefault();
        window.location.href = 'http://localhost:3000/blackjack';
    }

        <>

        <form onSubmit={handleSubmit}>
        <h2>Add User</h2>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' name='name' value={name} require onChange={handleNameChange}/>
        <input type='submit' name='submit' value='Save'/>
        <form action='http://localhost:3000/blackjack'>
            <input type='submit' value='Start Game'/>
        </form>

        </form>
        </>
    )
};
 
export default WelcomeForm;