import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import BookShelf from './BookShelf';

class Search extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired,
		onUpdate: PropTypes.func.isRequired
	}

	state= {
		query: ''
	}

	updateQuery= (query) => {
		this.setState({query: query.trim()})
	}

	render () {
		const { query } = this.state;
		let showingBooks;

		if (query) {
			const match = new RegExp(escapeRegExp(query), 'i');
			showingBooks = this.props.books.filter((book) => match.test(book.title));
		} else {
			showingBooks = this.props.books;
		}
		
		showingBooks.sort(sortBy('title'));

		return (
			<div className='search-books'>
				<div className='search-books-bar'>
					<Link 
						to='/'
						className='close-search' 
					>Close</Link>
					<form className='search-books-input-wrapper'>
							<input 
								type='text' 
								name='search' 
								placeholder='Search by title or author'
								value={query}
								onChange={(event) => this.updateQuery(event.target.value)}
							/>
					</form>
				</div>
				<div className='search-books-results'>
					<BookShelf shelfTitle='' books={showingBooks}/>
				</div>
			</div>
		)
	}
};

export default Search;