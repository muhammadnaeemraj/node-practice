const http = require("http");

const server = http.createServer((req, res) => {
    res.write("Hi welcome NodeJS nice to see you here!");
    res.end()
});

server.listen(3000);
