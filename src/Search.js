import React, { Component } from 'react';

class Search extends Component {
	handleSubmit = (e) => {
		e.preventDefault()

	}

	render () {
		return (
			<div className='search-books'>
				<div className='search-books-bar'>
					<a className='close-search'>Close</a>
					<form className='search-books-input-wrapper'>
							<input type='text' name='search' placeholder='Search by title or author'/>
					</form>
				</div>
				<div className='search-books-results'>
					<ol className='books-grid'></ol>
				</div>
			</div>
		)
	}
};

export default Search;