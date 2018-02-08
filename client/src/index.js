import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {getPollList} from './assets/client';
import {formatData} from './assets/helper';
import {config} from './config';
var ReactHighstock = require('react-highcharts/ReactHighstock.src');
var Highlight = require('react-highlight');

//initially render dom with empty highcharts
ReactDOM.render(React.createElement(ReactHighstock, {config: config}), document.getElementById('test'));

let series = [];
JSON.parse(localStorage.getItem("stocks"))
  .forEach(v => {
    getPollList(v).then(data => {
      series.push({
        name : data["Meta Data"]["2. Symbol"],
        data : formatData(data["Time Series (Daily)"]),
        tooltip: {
          valueDecimals: 2
        }
      })
      var config = {
        rangeSelector: {
          selected: 1
        },
        title: {
          text: 'Stock Prices'
        },
        series: series
      };
      ReactDOM.render(React.createElement(ReactHighstock, {config: config}), document.getElementById('test'));
     })

  })

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
