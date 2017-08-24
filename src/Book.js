import React from 'react';
import ShelfChanger from './ShelfChanger';


function Book (props) {
  return (
    <li key={props.book.id}>
      <div className='book'>
        <div className='book-top'>
          <div className="book-cover" 
            style={{ 
              width: 128, 
              height: 193, 
              backgroundImage: 'url(' + props.book.imageLinks.thumbnail + ')' 
            }}>
          </div>
          <ShelfChanger selected={props.book.shelf}/>
        </div>
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">{props.book.authors}</div>
      </div>
    </li>
  )
}
export default Book;