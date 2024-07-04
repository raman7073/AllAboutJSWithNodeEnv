/*
   The response object is used to send a response to the client.
    It is an instance of http.ServerResponse.
    It is a Writable Stream.
    res.send() method is used to send a response to the client.
    res.write() method is used to write a response to the client.
    res.end() method is used to end the response process.

    Difference between res.send() and res.write():
     With res.send() method,we can write the response in a single line.
     With res.write() method, we can write the response in multiple lines.

    When a request is made to the server, the connection between client and server is opened and the server
    is in listening mode. 
    res.end() method responds to the client and closes the connection between client and server.

    res.write() method sends a response to the client and keeps the connection between client and server open.
    we can close the connection by using res.end() method.

*/
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
