import React, { Component } from 'react';
import Lists from './Lists.js';
import AddList from './AddList.js';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      lists: [], // this holds the name of each list
      items: {} // this property names of this object are the names of the lists; their values are arrays of the items in each list
    };
  }

  /**
   * This function takes the state of an AddList component as its parameter
   * and updates the state of this App component by adding a new entry to the "lists"
   * array and then adding a new property in the "items" object that has the same name
   * as the value put into the "lists" array. It should then re-render this App component.
   */
  handleAddList(s) {
      this.setState(({ lists, items }) => ({ 
        lists: [...lists, s],
        items: {...items, [s]: [] }
      }));
  }

  /**
   * This function takes the state of an AddItem component as its parameter
   * and updates the state of this App component by adding a new value to the 
   * appropriate array in the "items" property of the state. Keep in mind that
   * the property names of "items" are the names of each list, which is mapped
   * to an array of the items in that list. After updating the "items" part of 
   * the state, this function  should then re-render this App component.
   */
  handleAddItem(s) {
    // recieving a state that is a object in the form {name: XXXX}, and this will be pushed into the relevant array at the specific key

    // this.state = {
    //  lists: [], 
    //  items: {}
    // };

    // s logs: {newItem: {name: "max"}, idName: "dogs"}

    let listName = s.idName; // dogs
    let updatedItems = s.newItem;  // {name: "max"}
    let items = this.state.items;
    for (const [key] of Object.entries(items)) {
      if (key === listName) {
        this.setState({items: {...items, [key]: [...items[key], updatedItems]}})
      }
    }
  }



  /**
   * Renders the component.
   */
  render() {
    return (
      <div className="App">
        <AddList addList={this.handleAddList.bind(this)} />
        <div id="listsDiv" className="List">
          <Lists lists={this.state.lists} items={this.state.items} addItem={this.handleAddItem.bind(this)} />
        </div>
      </div>
    );
  }

}

export default App;
