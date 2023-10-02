const Cards = ({cards, suit, image, value}) => {



    return(
        <>

        <div>
            <h3>{cards.suit}{cards.value}</h3>
            <img src = {cards.image}/>
        </div>
        

        </>
    )
};

export default Cards;

