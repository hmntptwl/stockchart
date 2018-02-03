var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var stockSchema = new Schema({
  ip:{
    type:String,
    required:true,
    unique: true
  },
  stocks: {
    type : [String],
    default: ['GOOG','AAPL','AMZN','TWTR']
  }
})

module.exports = mongoose.model('stoser', stockSchema)
