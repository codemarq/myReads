import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import BookShelf from './BookShelf';

class Search extends Component {
	

	render () {
		return (
			<div className='search-books'>
				<div className='search-books-bar'>
					<Link 
						to='/'
						className='close-search' 
					>Close</Link>
					<form className='search-books-input-wrapper'>
							<input type='text' name='search' placeholder='Search by title or author'/>
					</form>
				</div>
				<div className='search-books-results'>
					<BookShelf shelfTitle='' books={this.props.books}/>
				</div>
			</div>
		)
	}
};

export default Search;