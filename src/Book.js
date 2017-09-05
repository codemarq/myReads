import React, { Component } from 'react';


class Book extends Component {
  state = {
    value: this.props.book.shelf
  };
  
  handleChange = (event) => {
    this.setState({ 
      value: event.target.value,
    })
    this.props.onUpdate(this.props.book, event.target.value)
  };
  
  render() {
    const { id, title, authors, imageLinks } = this.props.book;

    return (
      <li key={id}>
        <div className='book'>
          <div className='book-top'>
            <div 
              className="book-cover" 
              style={{ 
                width: 128, 
                height: 193, 
                backgroundImage: `url( ${imageLinks.thumbnail})` 
              }}>
            </div>
            <div className="book-shelf-changer">
              <select defaultValue={this.state.value} onChange={this.handleChange}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Already Read</option>
                <option value=" ">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{
            Array.isArray(authors) ? authors.map(author => (
                <div key={author}>{author}</div>
            )) :  
              <p>{authors}</p>
            }
          </div>
        </div>
      </li>
    )
  }
}
export default Book;