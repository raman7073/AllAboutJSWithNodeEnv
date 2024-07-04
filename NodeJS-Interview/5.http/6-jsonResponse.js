const http = require("http");
const products = {
  pcode: 101,
  pname: "Mobile",
};
const server = http.createServer((req, res) => {
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
  } else if (url === "/json") {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(products)); //accept only string or buffer
    res.end();
  } else if (url === "/getdate") {
    let now = new Date();
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ now }));
  }
});
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
