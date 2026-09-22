const http = require('http');

const Port = 3000;

const server = http.createServer((req, res) => {

    // Status code
    res.statusCode = 200;

    // Header
    res.setHeader('Content-Type', 'text/plain');

    // Response
    res.end('Hello World');
});

server.listen(Port, () => {
    console.log(`Server running at http://localhost:${Port}`);
});