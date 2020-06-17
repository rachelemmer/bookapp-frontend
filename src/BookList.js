import React from 'react'
import BookCard from './BookCard'

const BookList = (props) => {
    
    return (
        <div className="list"> {
            props.books.map(book => {
            
                let image 
                if (book.image) {
                    image = book.image
                } else {
                    image = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ""
                }
                
            return <BookCard 
                setIsFavorite={props.setIsFavorite}
                history={props.history}
                key={book.id} 
                book={book}
                image={image} 
                title={book.title || book.volumeInfo.title} 
                displayFavorite={props.displayFavorite}
                removeFromFavorites={props.removeFromFavorites}
            />
            })
        }
        </div>
    )
}

export default BookList;
