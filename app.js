const http = require('http')
const { FileResponse } = require('./fr')
// Constant
const port = 3000
http.createServer(function (req, res) {
    const fileResponse = new FileResponse(res)

    fileResponse.addResponse('/', 'index.html', 'text/html')
    fileResponse.addResponse('/contacts', 'contacts.html', 'text/html')
    fileResponse.addResponse('/info', 'info.html', 'text/html')
    fileResponse.addResponse('/about', 'about.html', 'text/html')

    //fileResponse.addResponse('/assets/style.css', 'assets/style.css', 'text/css')
    fileResponse.addResponse('/img/kota-bg.png', 'img/kota-bg.png', 'image/png')

    // bootstrap
    fileResponse.addResponse(
        '/assets/bootstrap/css/bootstrap.min.css',
        'assets/bootstrap/css/bootstrap.min.css',
        'text/css'
    )

    fileResponse.addResponse(
        '/assets/css/styles.min.css',
        'assets/css/styles.min.css',
        'text/css'
    )

    fileResponse.addResponse(
        '/assets/fonts/simple-line-icons.min.css',
        'assets/fonts/simple-line-icons.min.css',
        'text/css'
    )

    fileResponse.addResponse(
        '/assets/bootstrap/js/bootstrap.min.js',
        'assets/bootstrap/js/bootstrap.min.js',
        'application/javascript'
    )

    fileResponse.addResponse(
        '/assets/js/script.min.js',
        'assets/js/script.min.js',
        'application/javascript'
    )

    fileResponse.response(req.url)
}).listen(port, () => {
    console.log(`Listening on port ${port}`)
})