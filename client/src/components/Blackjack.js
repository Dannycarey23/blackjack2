import React from 'react';
import Cards from './Cards';
import Instructions from './Instructions';
import './blackjack.css'

const Blackjack = ({playerHand, dealerHand, result, handleDeal, handleStick, handleTwist, buttons, user}) => {
    
    const playerNode = playerHand.map((card) => {
        return <Cards card={card}/>

    })
    const dealerNode = dealerHand.map((card) => {
        return <Cards card={card} />
    })
    
    return ( 

        <>
        <div className='gameTableDiv'>
            
            <div className='blackJackButtons'>
                <Instructions/>
                <button className="bjBtns" onClick={handleDeal}>Deal </button>
                <button className="bjBtns" onClick={handleStick} disabled = {buttons}>Stick</button>
                <button className="bjBtns" onClick={handleTwist} disabled = {buttons} >Twist</button>
            </div>

            
            <div className='playerDiv'>
                <h1 className = 'gameHeader'><u>{user.name}</u></h1>
                {playerNode}
            </div>

            <div className='resultDiv'>
                <h1 className='gameHeader'> {result} </h1>
            </div>

            <div className='dealerDiv'> 
                {dealerNode}
                <h1 className = 'gameHeader'><u>Dealer</u></h1>
            </div>

        </div>
        </>
     );
}
export default Blackjack;