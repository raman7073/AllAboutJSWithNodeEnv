const express = require("express");
const app = express();
const paramsMiddleware = (param1, param2) => {
  return (req, res, next) => {
    const value = param1 + param2;
    req.value = value;
    next();
  };
};

//in this way , this middleware is used for this  request
app.post("/", paramsMiddleware(2, 4), (req, res) => {
  console.log(req.value);
  res.send("user");
});
app.listen(8000, () => {
  console.log("Server is running...");
});
