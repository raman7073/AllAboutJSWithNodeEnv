/* 
 The "copyFile()" method is used to copy
 files i.e., it creates a duplicate file
 at a given location.
 fs.copyFile(src,location,mode,()=>{});
 src -> file location to copy
 location -> file location to create a copy
 mode -> Behavior(Optional) Ex : fs.constants.COPYFILE_EXCL , the
 operation will fail if the same name file exists.
 fs.constatnt.COPYFILE_FICLONE
 The operation will create a copy-on-write reflink.If it is not supported then it 
 will go to a fallback mechanism.
 fs.constants.COPYFILE_FORCE
 The operation will create a copy-on-write reflink.
 If it is not supported then the operation will fail.
 callback - to recieve error and handle it.

 Relative Question:
 1. What if source path belongs to a folder not file?
   -> it will throw an error.
 2. What if there is no file name mentioned in the destination?
   ('./')
   It will throw an error
*/
const fs = require("fs");
fs.copyFile("./test.txt", "./new.txt", fs.constants.COPYFILE_EXCL, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Copied");
  }
});
