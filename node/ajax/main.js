// http内置模块
const http = require('http')
// 文件模块
const fs = require('fs')
// 创建一个读取文件流
const indexFile = fs.createReadStream('./index.html')

// 创建一个 web 服务器
// req 请求对象 res 返回响应数据
const server = http.createServer((req, res) => {
    // 怎么得到 index.html?
    // 判断是否是首页
    if (req.url == '/') {
        // http 响应头 
        // 200 请求成功状态码
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf8',
        })
        indexFile.pipe(res)
    } else if (req.url == '/info') {
        // api 后端
        const info = {
            "username": "宝儿",
            "desc": "在线埋人"
        }

        res.writeHead(200, {
            // 文件格式 纯文本
            'Content-Type': 'text/plain; charset=utf8',
        })
        res.end(JSON.stringify(info))
    }
    // console.log('那个家伙又来啦')
    // res.end('hello world, 你要的反正不是首页')
})

server.listen(8000)