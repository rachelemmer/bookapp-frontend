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
                key={book.id} 
                book={book}
                image={image} 
                title={book.title || book.volumeInfo.title} 
            />
            })
        }
        </div>
    )
}

export default BookList;
