import React, { Component } from 'react';
import Header from './Header';
import './App.css';
import Books from './Books';
import Favorites from './Favorites';
import LogIn from './LogIn'
import SignUp from './SignUp'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


export default class App extends Component {

  state= {
    favorites: []
  }
 
  getBooks = () => {
    fetch("http://localhost:3000/favorites", {
      method: "GET",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    }).then(response => response.json())
        .then(books => this.setState({favorites: books}))
        .catch(error => console.error(error))
  }
  
  componentDidMount(){
    this.getBooks()
  }

  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route 
              path="/books" 
              render={(props) => 
                <Books
                  {...props}
                  
                />
              }
            />
            <Route 
              path='/favorites'
              render={(props) =>
                <Favorites
                  {...props} 
                  favorites={this.state.favorites} 
                />
              }
            />
            <Route 
              path='/login'
              render={(props) =>
                <LogIn
                getBooks={this.getBooks}
                />
              }
            />
            <Route 
              path='/signup'
              render={(props) =>
                <SignUp
                 
                />
              }
            />
          </Switch>
        </Router>
      </div>
    )
  }
}
