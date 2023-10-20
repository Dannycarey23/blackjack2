import './cards.css'

const Cards = ({card}) => {

    return(
        <>
         <div className='cardLayer'>
            <img src = {card.image} className="cardPic"/>
        </div>
        </>
    )
}

export default Cards;

