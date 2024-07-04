const http = require("http");
const server = http.createServer((req, res) => {
  console.log("server running");
  console.log(req.url);
});
server.listen(8000);
