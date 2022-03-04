const fs = require('fs')
class FileResponse {
    constructor(res) {
        this.res = res
        this.responses = {}
    }
    addResponse(url, path, contentType) {
        this.responses[url] = [path, contentType]
    }
    response(url) {
        const { res } = this
        if (!this.responses[url]) {
            res.writeHead(404, {'Content-Type': 'text/html'})
            return res.end()
        }
        const [path, contentType] = this.responses[url]
        fs.readFile(path, (err, data) => {
            res.writeHead(200, { 'Content-Type': contentType })
            res.end(data)
        })
    }
}
exports.FileResponse = FileResponse