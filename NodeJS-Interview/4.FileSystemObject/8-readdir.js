/*
      readdir() method is used to read the contents of a directory. By 
      reading the directory , we can get the contents i.e., files and folders of the directory.
      Syntax:
        fs.readdir(location,callback);
*/

const fs = require("fs");
const dirPath = process.argv;
fs.readdir(dirPath[2], (err, files) => {
  if (err) {
    console.log(err);
  } else {
    console.log(files.length + " files found");
    files.forEach((file) => {
      console.log(file);
    });
  }
});
