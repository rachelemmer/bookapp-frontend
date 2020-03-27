import React from 'react'

const BookCard = (props) => {
    return (
        <div className="card" onClick={props.handleClick}>
            <img src={props.image} alt="" />
            {/* <div className = "details">
                <h2>{props.title}</h2>
                <h3>{props.author}</h3>
            </div> */}
        </div>
    )
}

export default BookCard;
