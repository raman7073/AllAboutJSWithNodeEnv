/*
  The "writeFile()" method would over-write the content any file.
  But if we want to add some content to a file without over-writing it,
  then we can use the "appendFile()" method.It allow us to add/append data
    to a file
    Syntax:
    fs.appendFile(location,data,options,callback);
    location -> file location to append data, if file does not exist then it will create a new file.
    data -> data to append
    options -> encoding
    callback -> to recieve error and handle it.
   

    Relative Question:
    1. What if the file does not exist?
      -> It will create a new file and append the data.
    2. What if the file exists?
        -> It will append the data to the existing file.
    3. What if the file is not accessible?
        -> It will throw an error.
    4. What if the file is not writable?
        -> It will throw an error.
    5. What if the file is not readable?
        -> It will throw an error.
    6. What if the file is not a file?
        -> It will throw an error.
    7. What if the file is a directory?
        -> It will throw an error.
    8. What if the file is a symbolic link?
        -> It will throw an error.
    9. Explain the difference between "writeFile()" and "appendFile()"?
        -> writeFile() will over-write the content of the file, but appendFile() will append the data to the file.

    */

const fs = require("fs");
const content = "Hello World";
fs.appendFile("./test1.txt", content, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Appended");
  }
});
