import React, { Component } from 'react';
import Header from './Header';
import './App.css';
import Books from './Books';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Books />
      </div>
    )
  }
}
