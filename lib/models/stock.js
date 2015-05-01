'use strict';

var Request = require('request');

function Stock(symbol){
  this.symbol = symbol.toUpperCase();
}

Stock.prototype.getQuote = function(cb){
  var url = 'http://dev.markitondemand.com/Api/v2/Quote/json?symbol=' + this.symbol;
  Request(url, function(err, response, body){

    return cb(err, JSON.parse(body).LastPrice);
  });
};

module.exports = Stock;
// var s1 = new Stock('aapl');
// s1.getQuote(); // => 126.83
