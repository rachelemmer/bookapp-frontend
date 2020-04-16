import React from 'react'

const BookCard = (props) => {
    
    const handleClick = (event) => {
            fetch("http://localhost:3000/books", {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    title: props.book.volumeInfo.title,
                    author: props.book.volumeInfo.author,
                    image: props.book.volumeInfo.imageLinks ? props.book.volumeInfo.imageLinks.thumbnail : "",
                    api_id: props.book.id
                })
            }).then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.error(error))
        }
    
    
    return (
        <div className="card" onClick={handleClick}>
            <img src={props.image} alt=""/>
        </div>
    )
}


export default BookCard;
