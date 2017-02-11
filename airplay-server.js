const AirTunesServer = require('nodetunes');
const Speaker = require('speaker');
const os = require("os");

const airplayServerName = os.hostname();
console.log("Starting Airplay server", airplayServerName);
const server = new AirTunesServer({ serverName: airplayServerName });

server.on("clientConnected", function(stream) {
	console.log("Airplay client connected");
	var speaker = new Speaker({
		channels: 2,
		bitDepth: 16,
		sampleRate: 44100,
	});
	stream.pipe(speaker);
});

server.start();