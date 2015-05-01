'use strict';

var Hoek = require('hoek');
var Server = require('./lib/server');
Server.init(8000, function(err, server){
  Hoek.assert(!err, err);
  console.log('Hapi is listening', server.info.uri);
});
