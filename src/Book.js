import React from 'react';
import ShelfChanger from './ShelfChanger';


function Book (props) {
  const { id, shelf, title, authors } = props.book;
  return (
    <li key={id}>
      <div className='book'>
        <div className='book-top'>
          <div className="book-cover" 
            style={{ 
              width: 128, 
              height: 193, 
              backgroundImage: `url( ${props.book.imageLinks.thumbnail})` 
            }}>
          </div>
          <ShelfChanger selected={shelf}/>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    </li>
  )
}
export default Book;