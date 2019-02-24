// Enter a query in a search box
// Display a list of books matching the given query.



import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BookResult from './BookResult.js';
import Search from './Search.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <BookResult />
      </div>
    );
  }
}

export default App;
