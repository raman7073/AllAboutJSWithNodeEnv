/*
       Response Object
    The response object is used to send a response to the client.
    It is an instance of http.ServerResponse.
    It is a Writable Stream.
    It is passed as the second parameter to the 'request' event handler.

    Different methods of response object:
    1. res.write(chunk, [encoding], [callback])
    2. res.end([data], [encoding], [callback])
    3. res.setHeader(name, value)
    4. res.getHeader(name)
    5. res.removeHeader(name)
    6. res.statusCode
    7. res.statusMessage
    8. res.writeHead(statusCode, [statusMessage], [headers])
    9. res.sendDate
    10. res.getHeaderNames()
    11. res.getHeaders()
    12. res.hasHeader(name)
    13. res.setTimeout(msecs, callback);
    14. res.flushHeaders()


*/
const http = require("http");
const server = http.createServer((req, res) => {
  console.log(
    "____________________________Response Object______________________________________"
  );
  //console.log(res);
  res.setHeader("Content-Type", "text/html");
  res.write("<html><head><title>NodeJS</title></head>");
  res.write("<body><h1>Hello World from NodeJS</h1>");
  res.write("<h3>Hi</h3>");
  res.write("</body></html>");
  res.end("Hello World from NodeJS");
});
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
