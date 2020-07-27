const http = require('http');
const os = require('os');

console.log("fuck, I'm starting");

var handler = function(req, response) {
  console.log("fuck, I'm replying");
  response.writeHead(200);
  response.end("you've hit" + os.hostname() + "\n")
}
var www = http.createServer(handler)
www.listen(8080)
