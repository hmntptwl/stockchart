import {getStockData} from './client';

export const setItemInLocalStorageInitially = () => {
  if (!localStorage.getItem("stocks")) {
    let stocks = ['GOOG', 'AAPL']
    localStorage.setItem("stocks", JSON.stringify(stocks));
  }
}

export const getItemFromLocalStorage = () =>
JSON.parse(localStorage.getItem("stocks"));


//format data from rest api
export const formatData = (data) => {
  //convert key value pairs to array of arrays
  let arr = Object.entries(data);
  arr.forEach((v,i) => {
    arr[i][0] = + new Date(arr[i][0]);
    arr[i][1] = Number(arr[i][1]["1. open"]);
  })
  //highchart do not accept unsorted enteries.
  arr.sort();
  return arr;
}

//check if a stock code is valid
export const validateStock = (stockcode) => {
  return getStockData(stockcode).then(data => { if(data["Time Series (Daily)"])
  return 'success'; return 'fail'})
}
