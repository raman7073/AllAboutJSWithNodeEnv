const express = require("express");
const app = express();
const checkContentType = (req, res, next) => {
  if (req.headers["content-type"] !== "application/json") {
    res.send("Invalid request");
  }
  next();
};
app.use(checkContentType);

app.get("/", (req, res) => {
  console.log("Response sent");
  res.send("Response");
});
app.listen(8000, () => {
  console.log("Server is running...");
});
