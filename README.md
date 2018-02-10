# stockchart

##### This project is my solution to one of the freeCodeCamp's backend challenge problem [chart the stock market](https://www.freecodecamp.org/challenges/chart-the-stock-market).

So far, It satisfies the following user stories:

 1. I can view a graph displaying the recent trend lines for each added stock.
 2. I can add new stocks by their symbol name.
 3. I can view a graph displaying the recent trend lines for each added stock.
 4.  I can see changes in real-time.

### Tech Used: 
I have used MERN stack for this project.Initially I tried to implement a custom graph using d3.js , but it turned out to be too time consuming , as it also needed to be hooked up with react. After searching for possible options, [react-highcharts](https://www.npmjs.com/package/react-highcharts) turned out to be a fair option. Currently this project uses the same.

For getting stocks, I used API from [Alpha Advantage](https://www.alphavantage.co/documentation)

###  Running on local Machine
 `  git clone https://github.com/hemant1612/stockchart `
 `cd stockchart`
 `npm install && npm start`
 This will start the express server on port `3001`
 Now , `cd client && npm install && npm start`
 will start the front-end.
Now , go to `localhost:3000`
to see the live demo.
Happy hacking !

### To Do's:
 - use web sockets 
 - improve styling
 - implement the same project using redux


