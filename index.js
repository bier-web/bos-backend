var Server = require('./lib/server'),
	upgrade = require('doh').upgrade;

module.exports = function (config) {
	var server = new Server(config);
	upgrade(server);
	return server;
};

module.exports.attach = require('./lib/attach');
