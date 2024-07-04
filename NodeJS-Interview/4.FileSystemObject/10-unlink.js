/*
   Deleting a file
   The "unlink()" method is used to delete a file.
   Syntax:
    fs.unlink(location,callback);
    location -> file location to delete
    callback -> to recieve error and handle it.

    Relative Question:
    1. What if you want to delete a file that does not exist?
      -> It will throw an error.
*/

const fs = require("fs");
fs.unlink("./new.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Deleted");
  }
});
