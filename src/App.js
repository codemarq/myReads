import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import * as BooksAPI from './utils/BooksAPI'; 
import BookCase from './BookCase';
import Search from './Search';




class App extends Component {
  state = {
    books: []
  }
  
  componentDidMount () {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books });
    })
  };
  
  updateBook = (book) => {
    BooksAPI.update(book, book.selected).then((updatedBook) => {
      this.setState((state) => ({
        books: updatedBook
      }))
    })
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => (
          <BookCase books={this.state.books}/>
        )}/>
        
        <Route path='/search' render={() => (
          <Search books={this.state.books}/>
        )}/>
      </div>
    );
  }
}

export default App;
