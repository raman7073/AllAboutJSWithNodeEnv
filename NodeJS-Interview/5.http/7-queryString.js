/*
  Whenever we make a request to a server, by default it is a GET request.
  There may be a case where we need to send some data to the server with the GET request.
  Query String is used to send data to the server with the GET request.
  Query String is a part of the URL.
  Example: http://localhost:3000/?name=John&age=25
    Query String is name=John&age=25
    name and age are keys
    John and 25 are values
  With some advanced frameworks like Express, we can use req.query to get the query string data.
  But with the core http module, we need to parse the query string manually.
  */
const http = require("http");
const server = http.createServer((req, res) => {
  console.log(
    "____________________________Query String______________________________________"
  );
  console.log(req.url);
  let url = req.url;
  let query = url.split("?")[1];
  let keyValuePairs = query.split("&");
  let data = {};
  for (let i = 0; i < keyValuePairs.length; i++) {
    let keyValuePair = keyValuePairs[i].split("=");
    data[keyValuePair[0]] = keyValuePair[1];
  }
  console.log(data);
  res.end("Hello World from NodeJS");
});
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
