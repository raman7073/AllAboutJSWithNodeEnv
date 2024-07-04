/* 
 Reading Files with 'fs' Object.
 The 'fs' object offers a method called "readFile()"
 which reads a file and return the content.

*/

const fs = require("fs");
fs.readFile("test.txt", (err, data) => {
  console.log(data.toString());
});
