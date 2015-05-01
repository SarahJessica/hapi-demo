'use strict';

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/sumOfSq/{str}',
    config: {
      description: 'squares a string of numbers',
      handler: function(request, reply){

          var a = request.params.str.split(',');
          var squares = a.map(function(a){
            return a*a;
          });

          squares = squares.reduce(function(prev, curr){
            return prev + curr;
          }, 0);

            return reply({sumOfSq: squares});
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'sum of squares'
};
