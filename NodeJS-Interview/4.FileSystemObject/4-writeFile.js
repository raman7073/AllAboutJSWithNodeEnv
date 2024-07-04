/* 
  Writing Files - writeFile()
  The "fs" object provides a way to write files i.e., fill
  content in files programmatically. "writeFile()" method writes data
  in any file.
  fs.writeFile(filePath,content,options,()={});
  options for encoding ,flags, etc. callback to recieve error.
  It will create file if it is not there.
*/
const fs = require("fs");
fs.writeFile("text.txt", "New Content", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File written Successfully");
  }
});
