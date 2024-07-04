const express = require("express");
const app = express();
const router = require("./users");
app.use("/api", router);

app.listen(9000, () => {
  console.log("basic server running");
});
