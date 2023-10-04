import React from 'react';
import WelcomeForm from './WelcomeForm';

const Welcome = ({setNewUser}) => {

    return ( 
        <>
        <h1>Welcome Page </h1>
        <WelcomeForm setNewUser={setNewUser}/>
        </>
     );
}
 
export default Welcome;