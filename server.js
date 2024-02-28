const http = require("http");
const fs = require("fs");

// Create a server
const server = http.createServer((req, res) => {
  console.log("Server received a request");
  res.setHeader("Content-Type", "text/html");

  let path = "./views/";

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/contact":
      path += "contact.html";
      res.statusCode = 200;
      break;
    case "/contact-me":
      res.statusCode = 301;
      res.setHeader("Location", "/contact");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log("Error reading file");
      res.end();
    }
    res.end(data);
  });
});

server.listen(3000, () => {
  console.log("Listening for requests on port 3000");
});
