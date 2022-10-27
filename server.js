const http = require("http");
const port=8000;
const requestListener= function(req,res){
  res.writeHead(200)
  res.end("Heey")
}
const server = http.createServer(requestListener)
server.listen(port)