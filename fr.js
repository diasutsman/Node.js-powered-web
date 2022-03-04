const fs = require('fs')
class FileResponse {
    constructor(res) {
        this.res = res
        this.responses = {}
    }
    addResponse(url, path, contentType) {
        this.responses[url] = [path, contentType]
    }
    #renderFile(path, contentType) {
        const { res } = this
        fs.readFile(path, (err, data) => {
            res.writeHead(200, { 'Content-Type': contentType })
            res.end(data)
        })
    }
    response(url) {
        console.log(url)
        const { res } = this
        if (this.responses[url]) {
            const [path, contentType] = this.responses[url]
            return this.#renderFile(path, contentType)
        } else if (url.endsWith('.jpg')) {
            return this.#renderFile(url.slice(1), 'image/jpeg')
        } else if (url.endsWith('.css')) {
            return this.#renderFile(url.slice(1), 'text/css')
        } else if (url.endsWith('.js')) {
            return this.#renderFile(url.slice(1), 'application/javascript')
        }
        res.writeHead(404, { 'Content-Type': 'text/html' })
        return res.end()
    }
}
exports.FileResponse = FileResponse