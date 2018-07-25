const http = require('http')

const server = http.createServer((req, res) => {
// res.setHeader('Access-Control-Allow-Origin', '*')
    res.write('asdas')
    res.end()
})

server.listen(8080)