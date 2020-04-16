import React from 'react'
import BookList from './BookList'

export default function Favorites(props) {
    
    // fetch("http://localhost:3000/books")
    //     .then(response => response.json())
    //     .then(console.log)
    
    return (
        <div>
            <BookList books={props.favorites} /> 
        </div>
    )
}
