let express = require('express');
let app = express();

console.log("Hello World")

// function greet(req, res){
//  res.send("Hello Express")
// }

// app.get("/", greet)

function sendFiles(req, res){
 htmlFile = __dirname + '/views/index.html'
 res.sendFile(htmlFile)
}
function styleSheet(){
 app.use(__dirname + "/public")
}
app.static("/", styleSheet)
app.get('/', sendFiles)






























 module.exports = app;
