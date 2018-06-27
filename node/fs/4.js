// 从流中读取数据

const fs = require('fs')

// 创建可读流
const readStream = fs.createReadStream('./a.txt', 'utf-8')

// chunk 一部分一部分的给数据
readStream.on('data', (chunk) => {
    console.log('读取到数据-----------------------------\n' + chunk)
}).on('error', (err) => {
    console.log('出错了！' + err.message)
}).on('end', () => {
    console.log('读取完成')
}).on('close', () => {
    console.log('已经关闭')
})