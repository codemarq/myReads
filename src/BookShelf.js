import React, { Component } from 'react';
import Book from './Book';


class BookShelf extends Component {
  
  render() {
    return (
      <div className='list-books'>
        <div className='bookshelf'>
          <div className='bookshelf-title'>
            <h2>{this.props.shelfTitle}</h2>
            <div className='bookshelf-books'>
              <Book shelf={this.props.shelf}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BookShelf;