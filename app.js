const fs = require("fs");
const files = fs.readdirSync("./");
console.log("this is sync function : ", files);
fs.readdir("./", function (err, result) {
	if (err) {
		console.log("Error ta dekh :", err);
	} else {
		console.log("Result :", result);
	}
});
