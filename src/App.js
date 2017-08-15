import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Search from './Search';
import BookShelf from './BookShelf'


class App extends Component {
  state = {
    query: []
  }
  
  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => (
          <div>
            <header className='list-books-title'>
              <h1>My Reads</h1>
            </header>
            <BookShelf shelfTitle='Currently Reading' />
            <BookShelf shelfTitle='Want to Read' />
            <BookShelf shelfTitle='Already Read' />
          </div>
        )}/>
        <Route path='/search' render={() => (
          <Search/>
        )}/>
      </div>
    );
  }
}

export default App;
