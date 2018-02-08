import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { StockItem, AddStock } from './components/index';
import {getPollList} from './assets/client';


class App extends Component {
  render() {
    return (
      <div className="App">
        <StockItem/>
        <AddStock/>
      </div>
    );
  }
}


var setItemInLocalStorageInitially = () => {
  if(!localStorage.getItem("stocks")) {
    let stocks = ['GOOG', 'AAPL']
    localStorage.setItem("stocks", JSON.stringify(stocks));
  }
}

var getItemFromLocalStorage = () => {
  JSON.parse(localStorage.getItem("stocks"));
}

setItemInLocalStorageInitially();




export default App;
