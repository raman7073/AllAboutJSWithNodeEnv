const express = require("express");
const router = express.Router();

router.get("/user", (req, res) => {
  console.log(req.url);
  res.send("user intercepted");
});

module.exports = router;
