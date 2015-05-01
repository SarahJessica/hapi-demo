'use strict';

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/hello',
    config: {
      description: 'To return world',
      handler: function(request, reply){
        return reply({message: 'world'});
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'world'
};
