const Cards = ({cards, suit, image, value}) => {

    console.log(cards)

    return(
        <>

        <div>
            <h3>{cards.suit}{cards.value}</h3>
        </div>
        

        </>
    )
};

export default Cards;

