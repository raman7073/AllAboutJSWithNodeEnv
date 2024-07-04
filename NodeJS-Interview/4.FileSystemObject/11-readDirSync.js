/*
My thoughts:
  if a async process depend on another async process, we should use sync method.
  Example:
    - If we want to write the content of a file to another file, we should use readFileSync
      instead of readFile because writeFile will throw error because content will be undefined as
      readFile is async above.
  Different sync methods:
   fs.readdirSync(dirPath) 
   fs.readFileSync("test.txt")
   fs.writeFileSync("output.txt", content)
   fs.copyFileSync("./test.txt", "./new.txt")
   fs.unlinkSync("./new.txt")
   fs.existsSync("./new.txt")
   fs.appendFileSync("./test1.txt", content)

*/

const fs = require("fs");
console.log(process.argv); //node executable path, file path, argument1, argument2, ...
const dirPath = process.argv[2];
let content = fs.readdirSync(dirPath);
console.log(content);
