import React, { Component } from 'react';
import AddItems from './components/AddItems';
import ListItems from './components/ListItems';
import './App.css';

class App extends Component {

  state = {
    itemList: [
      
    ]
  }

  render() {
    return (
      <div className='App'>
        <AddItems
          itemList={this.state.itemList}
        ></AddItems>
        <ListItems>

        </ListItems>
      </div>
    );
  }
}

export default App;