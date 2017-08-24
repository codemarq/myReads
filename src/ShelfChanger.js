import React, {Component} from 'react';

class ShelfChanger extends Component {
  state = {
    value: this.props.selected
  };

  handleChange = (event) => {
    this.setState({value: event.selected})
  };

  render () {
    return ( 
      <div className="book-shelf-changer">
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Already Read</option>
        </select>
      </div>
    )
  }
}

export default ShelfChanger;