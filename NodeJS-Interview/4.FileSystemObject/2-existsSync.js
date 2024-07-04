/*
  Does a file or folder exists?
  To check that file system object offers two method ,exists()
  which is asynchronous and is deprecated,existsSync() which is 
  synchronous method.
*/
const fs = require("fs");
let ans = fs.existsSync("../3.Bffer");
console.log(ans);
