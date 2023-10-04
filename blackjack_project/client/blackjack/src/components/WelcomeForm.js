import React, {useState} from 'react';
import {getUser, addUser, updateUser} from './UserService'
import { useNavigate } from "react-router-dom";




const WelcomeForm = ({setNewUser}) => {

    const[name, setName] = useState('');

    const navigate = useNavigate();

    const handleNameChange = (event) => setName(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        addUser({
            name: name,
        })
        setNewUser({name: name})
        setName('');
    }

    const handleGameStart = () => {
        navigate("/blackjack")
    }


    const handleClick = (event) => {
        event.preventDefault();
        window.location.href = 'http://localhost:3000/blackjack';
    }
return(
        <>

        <form onSubmit={handleSubmit}>
        <h2>Add User</h2>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' name='name' value={name} require onChange={handleNameChange}/>
        <input type='submit' name='submit' value='Save'/>
        </form>

        <form onSubmit={handleGameStart}>
            <input type='submit' value='Start Game'/>
        </form>

     
        </>
    )
};
 
export default WelcomeForm;