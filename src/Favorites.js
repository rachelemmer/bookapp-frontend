import React from 'react'
import BookList from './BookList'

export default function Favorites(props) {
    
    return (
        <div>
            <BookList books={props.favorites} /> 
        </div>
    )
}
