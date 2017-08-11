import React, { Component } from 'react';
import ShelfChanger from './ShelfChanger';

const books = [
  {
    id: 'mockingbird',
    cover: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee'
  },
  {
    id: 'ender',
    cover: 'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")',
    title: "Ender's Game",
    author: 'Orson Scott Card'
  }
];

class Book extends Component {
  render() {
    return (
      <ol className='books-grid'>
      {books.map(book => (
        <li key={book.id}>
          <div className='book'>
            <div className='book-top'>
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.cover }}></div>
              <ShelfChanger />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.author}</div>
          </div>
        </li>
      ))}
      </ol>
    )
  }
}

export default Book;