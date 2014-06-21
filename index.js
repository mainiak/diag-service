var Hapi = require('hapi');
var os = require('os');
var fs = require('fs');

var server = Hapi.createServer(8000);

server.route({
	method: 'GET',
	path: '/',
	handler: function (request, reply) {
		var json = {
			tmpdir: os.tmpdir(),
			endianness: os.endianness(),
			hostname: os.hostname(),
			type: os.type(),
			platform: os.platform(),
			arch: os.arch(),
			release: os.release(),
			uptime: os.uptime(),
			loadavg: os.loadavg(),
			totalmem: os.totalmem(),
			freemem: os.freemem(),
			cpus: os.cpus(),
			networkInterfaces: os.networkInterfaces(),
			eol: os.EOL
		}

		var readOptions = {encoding: 'utf8'};

		fs.readFile('/etc/hosts', readOptions, function(err, data) {
			if (err) {
				console.log(err);
				reply(JSON.stringify(err));
			}

			json['hosts'] = data.split(os.EOL);

			fs.readFile('/etc/resolv.conf', readOptions, function(err, data) {
				if (err) {
					console.log(err);
					reply(JSON.stringify(err));
				}

				json['resolv'] = data.split(os.EOL);
				reply(JSON.stringify(json));
			})
		})
	}
});


// Start the server
server.start(function() {
	console.log("Hapi server started @", server.info.uri);
});
