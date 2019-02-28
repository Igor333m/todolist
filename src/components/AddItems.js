import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddItems extends Component {
  static propTypes = {
    itemList: PropTypes.array.isRequired
  }

  state = {
    value: '',
    items: []
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  
  render() {
    console.log("this.props", this.props);
    console.log("this.state", this.state);
    const { itemList} = this.props

    return(
      <div className=''>
        <h1>Shopping List</h1>
        <form>
          <input
            type='text'
            placeholder='Enter new item'
            value={this.state.value}
            onChange={this.handleChange}
          ></input>
          <button>Add Item</button>
        </form>
      </div>
    );
  }
}

export default AddItems;