/*
   Creating Folder using mkdir() method
    The "mkdir()" method is used to create a folder.
    Syntax:
        fs.mkdir(location,options,callback);
        location -> folder location to create
        options -> recursive : true/false , if true then it will create the folder and its parent folder if not exists.
                -> force : true/false , if true then it will create the folder even if it exists.
        callback -> to recieve error and handle it.
    
    Relative Question:
    1. What if the folder already exists?
      -> It will throw an error.
*/

const fs = require("fs");
fs.mkdir("./newFolder", { recursive: true }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Folder Created");
  }
});
