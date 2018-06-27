const fs = require('fs')

// 获取文件状态
const stats = fs.statSync('./files/sub/c.txt')
// console.log(stats)

console.log(stats.isFile()) 
// (boolean) true