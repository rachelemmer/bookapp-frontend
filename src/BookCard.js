import React from 'react'

const BookCard = (props) => {

    const handleClick = (event) => {
        props.addToFavorites(props.book)
        console.log(props.book)
    }
    
    return (
        <div className="card" onClick={handleClick}>
            <img src={props.image} alt=""/>
        </div>
    )
}


export default BookCard;
