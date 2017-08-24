import React from 'react';
// eslint-disable-next-line
// import Book from './Book';
import ShelfChanger from './ShelfChanger';


function BookShelf (props) {
  
  return (
    <div className='list-books'>
      <div className='bookshelf'>
        <div className='bookshelf-title'>
          <h2>{props.shelfTitle}</h2>
          <div className='bookshelf-books'>
            <ol className='books-grid'>
              {props.books.map(book => (
                <li key={book.id}>
                  <div className='book'>
                    <div className='book-top'>
                      <div className="book-cover" 
                        style={{ 
                          width: 128, 
                          height: 193, 
                          backgroundImage: 'url(' + book.imageLinks.thumbnail + ')' 
                        }}>
                      </div>
                      <ShelfChanger selected={book.shelf}/>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
  
};

export default BookShelf;