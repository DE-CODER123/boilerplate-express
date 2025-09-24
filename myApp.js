let express = require('express');
let app = express();

console.log("Hello World")

// function greet(req, res){
//  res.send("Hello Express")
// }

// app.get("/", greet)

function sendFiles(req, res){
 let htmlFile = __dirname + '/views/index.html'
 res.sendFile(htmlFile)
}


app.use("/public", express.static(__dirname + "/public"));
app.get('/', sendFiles)






























 module.exports = app;
