/*
Routes are used to determine the specific behavior of the server based on the request URL.
With http , we use request.url property to handle routes.
*/
const http = require("http");
const server = http.createServer((req, res) => {
  console.log(
    "____________________________Routes______________________________________"
  );
  //console.log(res);
  let url = req.url;
  if (url === "/") {
    res.write("Welcome to Home Page");
    return res.end();
  } else if (url === "/data") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html><head><title>JSON Data</title></head>");
    res.write("<body><h1>Json Data</h1>");
    res.write("<h3>" + req.url + "</h3>");
    res.write("</body></html>");
    res.end("Hello World from NodeJS");
  }
});
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
