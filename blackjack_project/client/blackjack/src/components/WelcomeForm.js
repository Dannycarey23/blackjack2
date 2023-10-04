import React, {useState} from 'react';
import {getRecords, addUser} from './UserService';
import dealcards from '../container/GameContainer';

const WelcomeForm = ({addUser, dealCards}) => {
    const[name, setName] = useState('');

    const handleNameChange = (event) => setName(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        addUser({
            name: name,
        })
        setName('');
    }

    const handleClick = (event) => {
        event.preventDefault();
        window.location.href = 'http://localhost:3000/blackjack';
    }

        return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Add User</h2>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' name='name' value={name} require onChange={handleNameChange}/>
                    <input type='submit' name='submit' value='Save'/>
                        <form action="http://localhost:3000/blackjack" >
                            <input type='submit' value='Start Game' onClick={handleClick} />
                        </form>
            </form>
        </>
    )
};
 
export default WelcomeForm;