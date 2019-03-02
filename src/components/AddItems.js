import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddItems extends Component {
  static propTypes = {
    itemList: PropTypes.array.isRequired,
    onAddItem: PropTypes.func.isRequired,
    onRemoveItem: PropTypes.func.isRequired
  }

  state = {
    value: ''
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  addItem = event => {
    event.preventDefault();
    this.props.onAddItem(this.state.value);
    this.setState( {value: ''} );
  }
  
  inputIsEmpty = () => {
    return this.state.value === '' ? true : false
  }
  
  lastItemIsEmpty = () => {
    return this.props.itemList.length === 0 ? true : false
  }
  
  deleteLastItem = event => {
    event.preventDefault();
    this.props.onRemoveItem()
  }
  
  
  render() {
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