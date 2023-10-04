import React from 'react';
import Popup from 'reactjs-popup';

const Instructions = () => {
 

      

    return(
        <Popup trigger={<button> Rules</button>} position="bottom left">
          <div>
            <h1> "House" Rules:</h1>
            <ul>
                <li>Aim to have the value of all your cards add up to 21 without going over </li>
                <li>You win if your total is closer to 21 than the dealers is </li>
                <li>Click the twist button to get another card</li>
                <li>Click the stick button to end your turn</li>
                <li>Face cards (Kings, Queens & Jacks) count for 10</li>
                <li> Aces are high so count for 11</li>
            </ul>
          </div>
        </Popup>
    );
}

export default Instructions