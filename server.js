const http = require("http");
const app = require('./app')
const port = process.env.port||3000;
const server = http.createServer(app);
server.listen(port,'127.0.0.1');
//this i server
console.log("server startred");