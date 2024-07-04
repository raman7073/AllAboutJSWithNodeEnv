/* 
  What is a server?
    A server is a computer program or device that provides functionality for other programs or devices, called clients.
  Types of servers:
    1. Web server
    2. Proxy server
    3. Mail server
    4. File server
    5. Print server
    6. Application server
    7. Database server
   HTTP Server:
    Server that serves HTTP requests.
    HTTP is a protocol that allows the fetching of resources, such as HTML documents. 
    It is the foundation of any data exchange on the Web and it is a client-server protocol,
    which means requests are initiated by the recipient, usually the Web browser.
    HTTP is a stateless protocol, meaning that the server does not keep any data (state) between two requests.
    Each request is independent, and the server does not store any context about the client.
    The server sends responses back to the client based on each request.
    The communication between the client and server happens through a request-response cycle.
    The client sends a request to the server in the form of an HTTP request message, and the server responds with an HTTP response message.
    The request-response cycle continues until the client has received all the resources it needs to render the web page.
    The most commonly used HTTP methods are GET, POST, PUT, DELETE, PATCH, and OPTIONS.
  Server based on other protocols:
     Web Socket Server
     

*/
// Creating a simple HTTP server
// Importing http module
const http = require("http");
// Creating a server , functional server
const server = http.createServer((req, res) => {
  res.end("Hello World from NodeJS");
});
// Listening to the server
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
