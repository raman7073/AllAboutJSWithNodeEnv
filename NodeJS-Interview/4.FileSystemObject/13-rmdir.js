/*
   The "rmdir()" method is used to delete a folder.
   Syntax:
    fs.rmdir(location,options,callback);
    location -> folder location to delete
    options -> recursive : true/false , if true then it will delete the folder and its contents.
            -> force : true/false , if true then it will delete the folder even if it does not exist.
            -> maxRetries : number , number of retries to delete the folder.
            -> retryDelay : number , delay between retries.
    callback -> to recieve error and handle it.

    Relative Question:
    1. How will you delete a non-empty directory?
        -> We can use the "recursive" option to delete a non-empty directory.By default, it is false.
        
*/
const fs = require("fs");
fs.rmdir("./newFolder", { recursive: true }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Folder Deleted");
  }
});
