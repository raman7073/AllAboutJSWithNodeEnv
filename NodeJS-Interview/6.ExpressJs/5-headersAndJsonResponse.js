/*
  The request and response objects have headers-
  which indicate the type of data and more 
  information about the data requested or sent.

*/
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html"); // to inform the browser that the content is of type HTML
  // res.setHeader("Content-Type", "application/json"); // other types of content
  res.send("<h1>Hello World<h1>");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
