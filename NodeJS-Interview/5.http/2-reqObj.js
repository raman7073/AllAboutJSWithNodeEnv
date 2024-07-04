/*
  The request object contains every information 
  of client and related data.
*/

const http = require("http");
const server = http.createServer((req, res) => {
  console.log(
    "____________________________Request Object______________________________________"
  );
  console.log(req);
});
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
