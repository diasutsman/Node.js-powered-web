const http = require('http')
const fs = require('fs')
http.createServer(function (req, res) {
    const path = req.url === '/' ? 'index.html' : ['/about', '/contacts', '/info'].includes(req.url) ? `${req.url.slice(1)}.html` : req.url.endsWith('.css') ? 'assets/style.css' : ''
    fs.readFile(path, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' })
            res.end('404 Not Found')
        }
        const contentType = path.endsWith('.html') ? 'text/html' : path.endsWith('.css') ? 'text/css' : ''
        res.writeHead(404, { 'Content-Type': contentType })
        res.end(data)
    })
}).listen(3000)