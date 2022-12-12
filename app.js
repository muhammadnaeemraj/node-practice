const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/home") {
    res.writeHead(200, { "Contect-Type": "application/json" });
    res.end(
      JSON.stringify({
        data: "Hello world!",
      })
    );
  } else if (req.url === "/about") {
    res.writeHead(200, { "Contect-Type": "application/json" });
    res.end(
      JSON.stringify({
        data: "Hi I am about us page!",
      })
    );
  } else {
    res.writeHead(404, { "Contect-Type": "application/json" });
    res.end(
      JSON.stringify({
        data: "Page not Fount! Please choose the right path.",
      })
    );
  }
});

server.listen(PORT);
