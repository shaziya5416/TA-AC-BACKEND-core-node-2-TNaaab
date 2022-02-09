//relative path of index.js
console.log("../client/index.js");

//absolute path of index.js
var path = require("path");
var filePath = path.join(__dirname, "..", "client/index.js");
console.log(filePath);