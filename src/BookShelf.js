import React, { Component } from 'react';
import Book from './Book';


class BookShelf extends Component {
  render() {
    return (
      <div className='list-books'>
        <header className='list-books-title'>
          <h1>My Reads</h1>
        </header>
        <div className='bookshelf'>
          <div className='bookshelf-title'>
            <h2>Currently Reading</h2>
            <div className='bookshelf-books'><Book/></div>
          </div>
        </div>
        <div className='bookshelf'>
          <div className='bookshelf-title'>
            <h2>Want to Read</h2>
            <div className='bookshelf-books'><Book/></div>
          </div>
        </div>
        <div className='bookshelf'>
          <div className='bookshelf-title'>
            <h2>Already Read</h2>
            <div className='bookshelf-books'><Book/></div>
          </div>
        </div>
      </div>
    )
  }
}

export default BookShelf;