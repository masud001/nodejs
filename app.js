const http = require("http");
const tutorial = require("./tutorial");
const hostName = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader("Content-Type", "text/plain");
	res.end("Hello world! Masud \n ");
});

server.listen(port, hostName, () => {
	console.log(`server running on ${hostName}: ${port}`);
});

console.log(tutorial.minus(10, 6));
console.log(tutorial.sum(10, 5));
