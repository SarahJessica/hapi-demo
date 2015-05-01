'use strict';

var Package = require('../../package.json');

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/generic/{name}',
    config: {
      description: 'Gets a specific property from package.js',
      handler: function(request, reply){
        return reply({package: Package[request.params.name]});
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'generic'
};
