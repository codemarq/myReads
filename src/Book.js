import React, { Component } from 'react';

class Book extends Component {
  render() {
    return (
      <div className='book'>
        <div className='book-cover'></div>
        <div className='book-title'></div>
        <div className='book-authors'></div>
      </div>
    )
  }
}

export default Book;