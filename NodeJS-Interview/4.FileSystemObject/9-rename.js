/*
    Rename and moving files
    Syntax:
    fs.rename(oldPath,newPath,callback);
    oldPath -> old file location
    newPath -> new file location
    callback -> to recieve error and handle it.

    Relative Question:
    1. What if the file does not exist?
      -> It will throw an error.
    2. What would happen if the given destination does not exist?
      -> It will throw an error.
*/

const fs = require("fs");
fs.rename("./new1.txt", "../new1.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Renamed");
  }
});
