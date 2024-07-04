const fs = require("fs");
let content = "";

let readStream = fs.createReadStream("tst.txt");
readStream.on("data", function (chunk) {
  content += chunk;
});
readStream.on("error", function (error) {
  console.log(error);
});
readStream.on("end", function () {
  console.log(content);
});
