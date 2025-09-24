let express = require('express');
let app = express();
require('dotenv').config();


console.log("Hello World")

// function greet(req, res){
//  res.send("Hello Express")
// }

// app.get("/", greet)

function sendFiles(req, res){
 let htmlFile = __dirname + '/views/index.html'
 res.sendFile(htmlFile)
}

//send json files
function sendJson(req, res) {
  let messageObj = { message: "Hello json" };

  if (process.env.MESSAGE_STYLE === "uppercase") {
    messageObj.message = messageObj.message.toUpperCase();
  }

  res.json(messageObj);
}

app.use("/public", express.static(__dirname + "/public"));
app.get('/', sendFiles)
app.get("/json", sendJson)






























 module.exports = app;
