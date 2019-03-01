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

  addItem = event => {
    event.preventDefault();
    this.setState(oldState => ({
      items: [...oldState.items, this.state.value],
      value: ''
    }));
  }

  inputIsEmpty = () => {
    return this.state.value === '' ? true : false
  }

  lastItemIsEmpty = () => {
    return this.state.items.length === 0 ? true : false
  }

  deleteLastItem = event => {
    event.preventDefault();
    this.state.items.pop();
    this.setState(oldState => ({
      items: oldState.items
    }));
  }

  
  render() {
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
          <button
            onClick={this.addItem}
            disabled={this.inputIsEmpty()}
          >Add Item</button>
        </form>
        <button
          onClick={this.deleteLastItem}
          disabled={this.lastItemIsEmpty()}
        >Delete Last Item</button>
      </div>
    );
  }
}

export default AddItems;