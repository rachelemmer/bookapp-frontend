import React from 'react'

const BookCard = (props) => {
    
    const {book, displayFavorite, removeFromFavorites} = props

    handleClick = () => {
        if (displayFavorite) {
            postBook(book) }
        else {
            removeFromFavorites(book)
        }
    }
        
    
    const postBook = () => {   
        fetch("http://localhost:3000/books", {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    title: book.volumeInfo.title,
                    author: book.volumeInfo.author,
                    image: book.volumeInfo.imageLinks ? props.book.volumeInfo.imageLinks.thumbnail : "",
                    api_id: book.id
                })
            }).then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.error(error))
        }
    }
    
    return (
        <div className="card" onClick={handleClick}>
            <img src={props.image} alt=""/>
        </div>
    )

export default BookCard;
