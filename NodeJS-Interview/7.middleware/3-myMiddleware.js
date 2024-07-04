const express = require("express");
const app = express();
const myMiddleware = (req, res, next) => {
  console.log("My Middleware");
  next();
};
const customMiddleware = (req, res, next) => {
  console.log("Custom Middleware");
  next();
};
//in this way , this middleware is used for every request
app.use(myMiddleware);

app.get("/", (req, res) => {
  console.log("Response sent");
  res.send("Response");
});
//in this way , this middleware is used for this  request
app.get("/user", customMiddleware, (req, res) => {
  console.log("user sent");
  res.send("user");
});
app.listen(8000, () => {
  console.log("Server is running...");
});
