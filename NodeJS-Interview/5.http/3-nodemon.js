/*
  Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. Perfect for development. Install it using npm.
  npm install -g nodemon 
*/
const http = require("http");
const server = http.createServer((req, res) => {
  console.log(
    "____________________________nodemon______________________________________"
  );
  res.end("Hello World from NodeJS");
});
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
