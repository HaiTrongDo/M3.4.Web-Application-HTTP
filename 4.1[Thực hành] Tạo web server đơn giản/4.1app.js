const http = require('http');
const port = 8080;


const server = http.createServer((req, res) => {
    res.write('<h1>Hello world </h1><hr>')
    res.end()
})

server.listen(port, 'localhost')
