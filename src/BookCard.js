import React from 'react'

function BookCard(props) {
    
    const {book, displayFavorite, removeFromFavorites, setIsFavorite, history} = props

    function handleClick() {
        if (displayFavorite) {
            displayFavorite(book)
            postBook(book)
            setIsFavorite(true)
            history.push("Favorites")
         }
        else {
            removeFromFavorites(book)
            deleteBook(book)
        }
    
        function postBook() {   
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

        function deleteBook() {
            fetch(`http://localhost:3000/books/${book.id}`, {
                method: 'DELETE'
            })
        }
    }
    
    return (
        <div className="card" onClick={handleClick}>
            <img src={props.image} alt={props.title}/>
        </div>
    )
}

export default BookCard;
