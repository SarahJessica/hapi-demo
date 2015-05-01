'use strict';

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/add/{x}/{y}',
    config: {
      description: 'Adds two numbers',
      handler: function(request, reply){
        return reply({sum: (request.params.x*1) + (request.params.y*1)});
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'add'
};
