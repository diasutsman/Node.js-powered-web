const http = require('http')
const { FileResponse } = require('./fr')
// Constant
const port = 3000
http.createServer(function (req, res) {
    const fileResponse = new FileResponse(res)

    fileResponse.addResponse('/index', 'index.html', 'text/html')
    fileResponse.addResponse('/contacts', 'contacts.html', 'text/html')
    fileResponse.addResponse('/info', 'info.html', 'text/html')
    fileResponse.addResponse('/about', 'about.html', 'text/html')

    //fileResponse.addResponse('/assets/style.css', 'assets/style.css', 'text/css')
    fileResponse.addResponse('/img/kota-bg.png', 'img/kota-bg.png', 'image/png')

    fileResponse.response(req.url)
}).listen(port, () => {
    console.log(`Listening on port ${port}`)
})
