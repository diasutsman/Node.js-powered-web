const http = require('http')
const fs = require('fs')
const { url } = require('inspector')
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    switch (req.url) {
        case '/':
            readFile('./index.html', res, 'text/html')
            break;
        case '/info':
            readFile('./info.html', res, 'text/html')
            break;
        case '/about':
            readFile('./about.html', res, 'text/html')
            break;
        // read css
        case './assets/style.css':
            readFile('/assets/style.css', res, 'text/css')
            break
        default:
            res.writeHead(404)
    }
    res.end()

}).listen(8080)

function readFile(path, res, type) {
    fs.readFile(path, (err, data) => {
        if (err) throw err
        res.writeHead(200, { 'Content-Type': type })
        res.write(data)
    })
}