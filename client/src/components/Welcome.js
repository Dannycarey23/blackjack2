import React from 'react';
import WelcomeForm from './WelcomeForm';

const Welcome = ({setNewUser}) => {

    return ( 
        <div className='welcomeDiv'>
            <h1><strong><u>Cam's Casino</u></strong></h1>
            <div className='welcomeFormParent'>
                <WelcomeForm setNewUser={setNewUser}/>
            </div>
        </div>
     );
}
 
export default Welcome;