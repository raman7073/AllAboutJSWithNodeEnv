/*
Custom Middleware
 -> Create a function customMiddleware
 -> Configure it with the app to be used for every request using app.use(customMiddleware).

*/
const express = require("express");
const app = express();

const customMiddleware = (req, res, next) => {
  console.log("Custom Middleware");
  next(); //important to call next() to pass the control
};
app.use(customMiddleware); //will be used for every request

app.listen(3000, () => {
  console.log("Server is running...");
});
