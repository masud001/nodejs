const express = require("express");
const app = express();
let PORT = 3000;

// get request

app.get("/", (req, res) => {
	res.send("Hello world");
});

app.get("/api/courses", (req, res) => {
	res.send([1, 2, 3, 4]);
});

app.listen(PORT, () => console.log(`listening port on ${PORT}`));
