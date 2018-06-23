const http = require('http')
const fs = require('fs')
const zlib = require('zlib')


const server = http.createServer((req, resp) => {
    // 浏览器是否支持自动解压
    if (req.headers['accept-encoding'].indexOf('gzip') != -1) {
        gzip = zlib.createGzip()
        resp.writeHead(200, {
            'Content-Encoding': 'gzip',
            'Content-Type': 'text/plain; charset=utf8'
        })
        fs.createReadStream('./a.txt').pipe(gzip).pipe(resp)
    } else {
        resp.writeHead(200, {
            'Content-Type': 'text/plain; charset=utf8'
        })
        fs.createReadStream('./a.txt').pipe(resp)
    }
})

server.listen(8000)
