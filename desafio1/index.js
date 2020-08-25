const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Eu sou Full Cycle')
});

server.listen(port, hostname, () => {
    console.log(`Server up and running at http://${hostname}:${port}`);
});