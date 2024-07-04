const fs = require("fs");
let writeStream = fs.createWriteStream("output.txt");
const data = " I love exclusive, conditionally";

writeStream.write(data, "utf-8");
writeStream.end();
writeStream.on("finish", function () {
  console.log("Finishing complete");
});
