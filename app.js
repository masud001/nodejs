// Event module in node js

const EventEmitter = require("events");
const emitter = new EventEmitter();

// register an event
emitter.on("logedIn", (arg) => {
	console.log(`log in hoise.... `, arg);
});
// raise events
emitter.emit("logedIn", { id: 2, url: "google.com" });
