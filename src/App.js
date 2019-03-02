import React, { Component } from 'react';
import AddItems from './components/AddItems';
import ListItems from './components/ListItems';
import './App.css';

class App extends Component {

  state = {
    itemList: [
      
    ]
  }

  addItem = item => {
    this.setState(oldState => ({
      itemList: [...oldState.itemList, item]
    }));
  }

  removeLastItem = () => {
    this.setState( () => ({
      itemList: this.state.itemList.slice(0, -1)
    }));
  }


  render() {
    return (
      <div className='App'>
        <AddItems
          itemList={this.state.itemList}
          onAddItem={this.addItem}
          onRemoveItem={this.removeLastItem}
        ></AddItems>
        <ListItems
          itemList={this.state.itemList}
        ></ListItems>
      </div>
    );
  }
}

export default App;