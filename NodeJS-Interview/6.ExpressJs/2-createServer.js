/*
   Create a server using express
    - create a file called server.js
    - create a server using express
         
*/
const express = require("express"); //importing express module
const app = express(); //creating an instance of express
//start listening on port 9000
app.listen(9000, () => {
  console.log("server running on port 9000");
});
