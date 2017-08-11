import React, { Component } from 'react';
import './App.css';
// import Search from './Search';
import BookShelf from './BookShelf'


class App extends Component {
  state = {
    books: []
  }
  
  render() {
    return (
      <div className="App">
        <BookShelf />
      </div>
    );
  }
}

export default App;
