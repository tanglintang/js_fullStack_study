// 写入流

const fs = require('fs')

const writeStream = fs.createWriteStream('./c.txt', 'utf8')

writeStream.on('close', () => {
    console.log('已经关闭')
})

writeStream.write('me me me')

writeStream.write('on on on')

writeStream.end('')