import React from 'react' 

const Card = ({cards, image, value}) => {

    return(
         <>
        <div>
        <img src = {cards.image}/>
        </div>
        </>
    )

};

export default Card;