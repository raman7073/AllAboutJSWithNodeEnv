/*
   URL parameters are parameters whose values are set dynamically in a page's URL. 
   They are part of the URL, and they are used to pass data to the server.
    URL parameters are also called route parameters.

    Difference between Query String and URL Parameters:
    Query String:
    - Query String is used to send data to the server in the form of key-value pairs.
    - Query String is a part of the URL.
    - Example: http://localhost:3000/?name=John&age=25
    - Query String is name=John&age=25
    - name and age are keys
    - John and 25 are values
    - With some advanced frameworks like Express, we can use req.query to get the query string data.
    - But with the core http module, we need to parse the query string manually.
    URL Parameters:
    - URL parameters are parameters whose values are set dynamically in a page's URL.
    - They are part of the URL, and they are used to pass data to the server.
    - They uniquely identify a resource.
    - Example: http://localhost:3000/user/123

    So overall, both Query String and URL Parameters are used to send data to the server
    and part of the URL.
    But they have different purposes.
    URL Parameters are used to set the values dynamically in a page's url.
    Query String is used when we want to send data to the server for filtering, sorting, etc.
    
*/
const express = require("express");
const app = express();

app.get("/user/:userId/:userName", (req, res) => {
  res.send(req.params);
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
