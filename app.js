const { Socket } = require("dgram");
const http = require("http");

const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.write("hello world");
		res.end();
	}
	if (req.url === "/masud/age") {
		res.write(JSON.stringify([1, 3, 4, 5, 6, 7]));
		res.end();
	}
});

server.listen(3000);
console.log("listening on port 3000....");
