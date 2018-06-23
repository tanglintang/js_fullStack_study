const fs = require('fs')
let data

try {
    data = fs.readFileSync('./f2.txt', 'utf8')
    console.log('文件内容：' + data.toString())
} catch (error) {
    console.error('读取文件失败' + error.message)
}