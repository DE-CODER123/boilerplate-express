let express = require('express');
let app = express();

console.log("Hello World")

function greet(req, res){
 res.send("Hello Express")
}

app.get("/", greet)
































 module.exports = app;
