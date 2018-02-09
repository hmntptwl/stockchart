import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {StockItem, AddStock} from './components/index';
import {getPollList, getStockData} from './assets/client';
import {getItemFromLocalStorage, formatData} from './assets/helper';
import {config} from './config';
import './App.css';

var ReactHighstock = require('react-highcharts/ReactHighstock.src');
var Highlight = require('react-highlight');


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stockcache: [],
      config : config,
      series : []
    }
  }

  componentDidMount() {
    this.setState({stockcache: getItemFromLocalStorage()})
    JSON.parse(localStorage.getItem("stocks"))
     .forEach(v => {
      getStockData(v).then(data => {
        this.state.series.push({
          name: data["Meta Data"]["2. Symbol"],
          data: formatData(data["Time Series (Daily)"]),
          tooltip: {
            valueDecimals: 2
          }
        })
        config["series"] = this.state.series;
        this.setState(config);
      })
    })
  }

  onAddStock(stockCode) {
    let stocks = getItemFromLocalStorage();
    if(stocks.indexOf(stockCode) === -1){
      stocks.push(stockCode);
      localStorage.setItem("stocks", JSON.stringify(stocks));
      this.setState({stockcache: stocks});
      getStockData(stockCode).then(data => {
        this.state.series.push({
          name: data["Meta Data"]["2. Symbol"],
          data: formatData(data["Time Series (Daily)"]),
          tooltip: {
            valueDecimals: 2
          }
        })
        config["series"] = this.state.series;
        this.setState(config);
     })
    }
 }


 onRemoveStock(stockCode){
   let stocks = getItemFromLocalStorage();
   let index = stocks.indexOf(stockCode);

   stocks.splice(index,1);
   localStorage.setItem("stocks", JSON.stringify(stocks));
   console.log(stocks)
   this.setState({stockcache : stocks})
   let indexInSeries = -1;
   this.state.series.forEach((v,i) => {
    if(v.name === stockCode)
     {
       indexInSeries = i;
     }
   })
   let { series }= this.state;
   series.splice(indexInSeries,1);
   config["series"] = series;
   this.setState({ config});
 }

  render() {
    //get stocks from localStorage
    let localStockCache = getItemFromLocalStorage();
    return (
      <div className="App">
        <ReactHighstock
          config={config}
        />
        <StockItem
          stocks={this.state.stockcache}
          onRemoveStock = {this.onRemoveStock.bind(this)}
        />
        <AddStock
          onAddStock={this.onAddStock.bind(this)}
        />
      </div>
    );
  }
}

export default App;
