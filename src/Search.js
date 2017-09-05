import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import BookShelf from './BookShelf';
import { search } from './utils/BooksAPI';


class Search extends Component {
	static propTypes = {
		onUpdate: PropTypes.func.isRequired
	}

	state= {
		query: '',
		books: []
	}

	updateQuery= (query) => {
		this.setState({query: query.trim()})
		search(query, 10).then(res =>{
			this.setState({
				books: res
			})
		})
	}

	clearQuery = () => {
    this.setState({ query: '', books: []})
  }

	render () {
		const { query } = this.state;
		let showingBooks;

		if (query) {
			const match = new RegExp(escapeRegExp(query), 'i');
			showingBooks = this.state.books.filter((book) => match.test(book.title));
		} else {
			showingBooks = this.state.books;
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
				{showingBooks.length !== this.state.books.length && (
          <div className='search-books-results'>
            <span> Now showing {showingBooks.length} of {this.state.books.length} total</span>
            <button onClick={this.clearQuery}>Clear</button>
						</div>
					)}
					<div >
						<BookShelf 
							shelfTitle='' 
							books={this.state.books}
							onUpdate={this.props.onUpdate}
						/>
					</div>

			</div>
		)
	}
};

export default Search;