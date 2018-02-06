import React, { Component } from 'react';
import LineChart from 'react-linechart';
import '../node_modules/react-linechart/dist/styles.css';
import './App.css';
import { getStockList } from './assets/client'
import { StockItem, AddStock } from './components/index'

export default class App extends Component {
    render() {

        function log(){
          return '<h1>Hello World !</h1>';
        }
        const data = [
            {
                color: "steelblue",
                points: [{x: '22-01-2016', y: 0}, {x: '22-02-2016', y: 5}, {x: '22-03-2016', y: 3}],
            },

        ];
        return (
            <div className="App-root">
                <div className="App">
                    <h1>My First LineChart</h1>
                    <LineChart
                        width={1200}
                        height={400}
                        data={data}
                        hidePoints={false}
                        onPointHover={log}
                        isDate={true}
                    />
                </div>
                <StockItem/>
                <AddStock/>
            </div>
        );
    }
}
