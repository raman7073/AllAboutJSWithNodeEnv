/*
   Global Objects in NodeJS
   global object is in global scope so 
   we don't need to import it.
  
   In web browsers, the window object is also a global object.
   In Node.js, the global is the global object.
   It has properties like console, require, exports, etc.
   It has methods like setTimeout, clearTimeout, setInterval, etc.
   module and process are also available in the global scope.
   __dirname and __filename are also available in the global scope.These are
   very useful when we are working with file manipulation on the server.
   
*/

//console.log(global);
//console.log(module);
//console.log(require);
//console.log(__dirname);
console.log(__filename);
