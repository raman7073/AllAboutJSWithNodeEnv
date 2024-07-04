/*
  Express.js has methods for each type of HTTP request (GET, POST, PUT, DELETE, etc.):
    app.get() for GET requests
    app.post() for POST requests
    app.put() for PUT requests
    app.delete() for DELETE requests
    app.all() for all types of requests

  The request object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers,
   and so on. It has a lot of information about the request like hostname, IP address, URL, method, headers, etc.
*/
const express = require("express");
const app = express();
// GET request
app.get("/", (req, res) => {
  console.log(req);
  res.send("Hello World from Express");
});
app.listen(9000, () => {
  console.log("server running on port 9000");
});
