const Joi = require("joi");
const express = require("express");
const app = express();
app.use(express.json());
// courses array

const courses = [
	{ id: 1, name: "Course 1" },
	{ id: 2, name: "Course 2" },
	{ id: 3, name: "Course 3" },
	{ id: 4, name: "Course 4" },
	{ id: 5, name: "Course 5" },
];

// get requests
app.get("/", (req, res) => {
	res.send("Hello world");
});

// All courses route
app.get("/api/courses", (req, res) => {
	res.send(courses);
});

// route for single course with ID
app.get("/api/courses/:id", (req, res) => {
	const course = courses.find((c) => c.id === parseInt(req.params.id));
	if (!course) res.status(404).send("the given ID was not found...!!");
	res.send(course);
});

// post requests routes CREATE COURSES

app.post("/api/courses", (req, res) => {
	// Data velidate using Joi NPM
	const schema = Joi.object({
		name: Joi.string().min(3).required(),
	});
	const result = schema.validate(req.body);

	if (result.error) {
		res.status(400).send(result.error.details[0].message);
		return;
	}
	const course = {
		id: courses.length + 1,
		name: req.body.name,
	};
	courses.push(course);
	res.send(course);
});

// UPDATE COURSES with all routes

let port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening port on ${port}`));
