/* 
 Node.js has a normal method and sync method for many opearations with the 
 fs object.
 readFile()  readFileSync()
 Behaviour of both the functions is the same except one 
 is async operation other is sync .

*/
const fs = require("fs");
//let content;
// fs.readFile("test.txt", (err, data) => {
//   content = data.toString();
//   console.log(content);
// });
// writeFile will throw error because content will be undefined as readFile is async above.
// So we should use readFileSync
let content = fs.readFileSync("test.txt");
fs.writeFile("output.txt", content, (err) => {
  if (err) console.log(err);
  else console.log("File Written Successfully");
});
