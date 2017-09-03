import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import * as BooksAPI from './utils/BooksAPI'; 
import Search from './Search';
import BookShelf from './BookShelf';



class App extends Component {
  state = {
    books: []
  }
  
  componentDidMount () {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books });
    })
  };
  
  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => (
          <div>
            <header className='list-books-title'>
              <h1>My Reads</h1>
            </header>
            <BookShelf 
              shelfTitle='Currently Reading' 
              books={this.state.books.filter(book => book.shelf === 'currentlyReading')}
            />
            <BookShelf 
              shelfTitle='Want to Read' 
              books={this.state.books.filter(book => book.shelf === 'wantToRead')}
            />
            <BookShelf 
              shelfTitle='Already Read' 
              books={this.state.books.filter(book => book.shelf === 'read')}
            />
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
