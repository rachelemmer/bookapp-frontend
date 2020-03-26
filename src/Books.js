import React, { Component } from 'react';
import Search from './Search';
import BookList from './BookList';

export default class Books extends Component {

    state = {
        books: [],
        searchInput: ''
    }


    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
    } 

    handleSearch = (event) => {
        event.preventDefault()
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchInput}`)
            .then(response => response.json())
            .then(result => {
               this.setState({ books: result.items})
        })
    }
    
    render() {
        return (
            <div>
               <Search handleChange={this.handleChange} handleSearch={this.handleSearch} /> 
               <BookList books={this.state.books}/> 
            </div>
        )
    }
}
