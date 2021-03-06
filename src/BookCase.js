import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';


class BookCase extends Component {
  
  render() {
    return (
      <div>
        <header className='list-books-title'>
          <h1>My Reads</h1>
        </header>
        <BookShelf 
          shelfTitle='Currently Reading' 
          books={this.props.books.filter(book => book.shelf === 'currentlyReading')}
          onUpdate={this.props.onUpdate}
        />
        <BookShelf 
          shelfTitle='Want to Read' 
          books={this.props.books.filter(book => book.shelf === 'wantToRead')}
          onUpdate={this.props.onUpdate}
        />
        <BookShelf 
          shelfTitle='Already Read' 
          books={this.props.books.filter(book => book.shelf === 'read')}
          onUpdate={this.props.onUpdate}
        />
        <div className="open-search">
          <Link 
            to='/search' 
            className='open-search-link'
          >Add a book</Link>
      </div>
    </div>
    )
  }
}

export default BookCase;