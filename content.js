const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/home") {
    res.writeHead(200, { "Contect-Type": "text/html" });
    res.write("./page/Home.js");
    res.end();
  } else if (req.url === "/about") {
    res.writeHead(200, { "Contect-Type": "text/html" });
    res.write("<h1>Hi i'm AboutUs Page!</h1>");
    res.end();
  } else {
    res.writeHead(404, { "Contect-Type": "text/html" });
    res.write("<h1>Page! not fount!</h1>");
    res.end();
  }
});

server.listen(PORT);
