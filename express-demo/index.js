const express = require("express");
const app = express();
let PORT = 3000;

// get request

app.get("/", (req, res) => {
	res.send("Hello world");
});

// courses route
app.get("/api/courses", (req, res) => {
	res.send([1, 2, 3, 4]);
});

// route for single course with ID
app.get("/api/courses/:id", (req, res) => {
	res.send(req.params.id);
});

let port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening port on ${port}`));
