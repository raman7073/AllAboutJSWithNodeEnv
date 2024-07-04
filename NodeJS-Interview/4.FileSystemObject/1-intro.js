/*
 fs is an internal nde module which offers
 file handling features like creating , copying , renaming or
 deleting files and also the same with folders.
 We can also get various information like whether an entity is a file or a 
 directory , the created / modified date and time,size etc.

 To work with the file system object "fs" module is required.
 Every file comes with a set of details that we can inspect using Node.js.
 In particular, using the stat() method provided by the fs module.
 You call it passing a file path, and once Node.js gets the file details ,
 it will call the callback function you pass, with 2 parameters: an error message, 
 and the file stats:

*/
const fs = require("fs");
fs.stat("../3.Buffer", (error, stats) => {
  console.log(stats);
});
//console.log(fs);
