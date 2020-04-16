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

  addToFavorites = (book) => {
    if(!this.state.favorites.find(favorite => book.id === favorite.id)) {
      this.setState({
        favorites: [...this.state.favorites, book]
      })
    }
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
