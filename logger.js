const EventEmitter = require("events");

class Logger extends EventEmitter {
	log(message) {
		console.log(message);

		// raise events
		this.emit("logedIn", { id: 2, url: "google.com" });
	}
}

module.exports = Logger;
