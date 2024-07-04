/*
   Relative Question:
   Why do we get [Object:null prototype] when we try to print the object returned by
   query string?
   The object returned by the querystring.parse() method does not prototypically
   inherit from the JavaScript Object. This means that typical Object methods
   such as obj.toString(), obj.hasOwnProperty(), and others are not defined and
   will not work.
*/

const http = require("http");
const qs = require("querystring");

const server = http.createServer((req, res) => {
  let url = req.url;
  let method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html><head><title>Data Form</title></head>");
    res.write('<body><form action="/data" method="POST">');
    res.write('Code:<input type="text" name="code"/>');
    res.write('Product:<input type="text" name="product"/>');
    res.write("<button>Submit</button>");
    res.write("<h3>" + req.url + "</h3>");
    res.write("</body>");
    return res.end();
  } else if (url === "/data" && method === "POST") {
    const data = [];
    let s = "";

    req.on("data", (chunk) => {
      console.log(chunk);
      data.push(chunk);
    });
    req.on("end", () => {
      s = Buffer.concat(data).toString();
      console.log(" from Buffer____________", s);
      console.log("After Parsing_________", qs.parse(s)); //[Object: null prototype] { code: '1111', product: 'App' }
      const obj = qs.parse(s);
      console.log(obj.code, obj.product);
      // obj=qs.parse(Buffer.concat(data).toString());
      // console.log(obj);
      // console.log(JSON.stringify(obj));
      // console.log(obj.code);
      // console.log(obj.product);
    });

    res.setHeader("Content-Type", "text/html");
    res.write("<html><head><title>Data Form</title></head>");

    res.write("<h3>" + req.url + "</h3>");
    res.write("</body>");
    return res.end();
  }
});
server.listen(3000);
