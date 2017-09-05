import React from 'react';
import Book from './Book';


function BookShelf (props) {

  return ( 
    <div className='list-books'>
      <div className='bookshelf'>
        <div className='bookshelf-title'>
          <h2>{props.shelfTitle}</h2>
          <div className='bookshelf-books'>
            <ol className='books-grid'>
              {props.books.map(book => (
               <Book book={book} key={book.id} onUpdate={props.onUpdate}/>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
};

export default BookShelf;