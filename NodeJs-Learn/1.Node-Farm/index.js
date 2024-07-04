const fs = require("fs");
//const hello = "Hello World";
//console.log(hello);
//Blocking, synchronous way
const textIn = fs.readFileSync("input.txt", "utf-8");
console.log(textIn);
const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync("output.txt", textOut);
console.log("File written!");
//Non-blocking, asynchronous way
fs.readFile("input.txt", "utf-8", (err, data) => {
  fs.writeFile("final.txt", `${data} ${data}`, "utf-8", (err) => {
    console.error(err);
  });
});
