import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Search from './Search';
import BookShelf from './BookShelf'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <BookShelf />
      </div>
    );
  }
}

export default App;
