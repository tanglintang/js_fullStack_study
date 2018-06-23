const fs = require('fs')
const zlib = require('zlib')

const gzip = zlib.createGzip()
// readFile 读取文件
// 一边读，一边写入另一个文件 =》 流
const inFile = fs.createReadStream('./a.txt') 

const outFile = fs.createWriteStream('./a.txt.gz')

inFile.pipe(gzip).pipe(outFile)