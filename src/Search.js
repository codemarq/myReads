import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Search extends Component {
	handleSubmit = (e) => {
		e.preventDefault()

	}

	render () {
		return (
			<div className='search-books'>
				<div className='search-books-bar'>
					<Link className='close-search' to='/'>Close</Link>
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