// 写入文件

const fs = require('fs')

fs.writeFile('./b.txt', 'hello world', 'utf-8', (err) => {
    if (err) throw(err)
    console.log('b 文件写入成功')
})

fs.writeFileSync('c.txt', 'hello world', 'utf-8')
console.log('c 文件写入成功')
