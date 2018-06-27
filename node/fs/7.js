// 流写入
const fs = require('fs')

fs.appendFile('./c.txt', 'hello world', 'utf-8', (err) => {
    if (err) throw(err)
    console.log('文件写入完成')
})