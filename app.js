const { Socket } = require("dgram");
const http = require("http");

const server = http.createServer((req, res) => {
	if (req.url === "/") {
		// ...
	}
	if (req.url === "/masud/age") {
		// ...
	}
});

server.listen(3000);
console.log("listening on port 3000....");
