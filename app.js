const Logger = require("./logger");
const logger = new Logger();

// register an event
logger.on("logedIn", (arg) => {
	console.log(`log in hoise.... `, arg);
});

logger.log("this is my message");
