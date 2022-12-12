const http = require("http");
const fs = require("node:fs");

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/home") {
    res.writeHead(200, { "Contect-Type": "text/html" });
    fs.readFile("pages/home.html", "utf8", (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    });
  } else if (req.url === "/about") {
    res.writeHead(200, { "Contect-Type": "text/html" });
    fs.readFile("pages/About.html", "utf8", (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    });
  } else {
    res.writeHead(404, { "Contect-Type": "text/html" });
    fs.readFile("pages/Error.html", "utf8", (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    });
  }
});

server.listen(PORT);
