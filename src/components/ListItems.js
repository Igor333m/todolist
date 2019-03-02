import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListItems extends Component {

  static propTypes = {
    itemList: PropTypes.array.isRequired
  }

  render() {
    return (
      <div>
        <h2 className="items">Items</h2>
        <ol className="item-list">
          {this.props.itemList.map( (item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default ListItems;