'use strict';

var Stock = require('../models/stock');

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/quote/{symbol}',
    config: {
      description: 'get quote for a symbol',
      handler: function(request, reply){
        var stock = new Stock(request.params.symbol);
        stock.getQuote(function(err, quote){
          return reply({quote: quote});

        });



      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'quote'
};
