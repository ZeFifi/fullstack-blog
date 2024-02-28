const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Server received a request");
});

server.listen(3000, () => {
  console.log("Listening for requests on port 3000");
});
