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
    this.getAllBooks();
  };
  
  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(this.getAllBooks())
  } 
  
  getAllBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books });
    })
  }
  
  render() {
    return (
      <div className="App">
      <Route exact path='/' render={() => (
        <BookCase 
        books={this.state.books}
        onUpdate={this.updateBook}
        />
      )}/>
      
      <Route path='/search' render={() => (
        <Search 
        books={this.state.books}
        onUpdate={this.updateBook}
        />
      )}/>
      </div>
    );
  }
}

export default App;