var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var fetch = require('node-fetch');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/stockchat');


var app = express();


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


const baseApiPath = 'https://www.alphavantage.co/query?';
const apiKey = process.env.APIKEY;


app.post('/stocks' , (req,res) => {
  let {type,symbol} = req.body;
  let url = `${baseApiPath}function=${type}&symbol=${symbol}&apikey=${apiKey}&outputsize=compact`
  fetch(url ,{
  }).then(data => data.json())
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  //pass err to next middleware
  next(err);
});

// error handler
if(app.get('env') === 'development') {
  app.use((err,req,res,next) => {
    res.status(err.status || 500);
    res.json({
      message : err.message,
      error : err
    });
  });
}




var port = process.env.PORT || '3001';
app.set('port', port);

app.listen(port , () => {
  console.log('listening on port 3001')
})
