const http = require('http')
const port = 8080

http.createServer((req, res) => {
    let txt =""
    if(req.url==='/login'){
        txt = "Login success"
    } else {
        txt="Login fail"
    }
    res.end(txt)
}).listen(port, 'localhost')