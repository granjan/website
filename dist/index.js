'use strict';

var Hapi = require('hapi');
var server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8080
});

server.route({
  method: 'GET',
  path: '/hello',
  handler: function handler(request, reply) {
    return reply('hello world');
  }
});
// Test Checkin
server.start(function (err) {
  if (err) {
    throw err;
  }
  console.log('server running at:', server.info.uri);
});