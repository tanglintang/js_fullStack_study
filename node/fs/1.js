// require 是 Node 内置支持的 COMMONJS 模块化方案
// es6 module
// 淘宝 sea.js  都是模块化方案

const fs = require('fs')
let data

// 异步读取文件
// data = fs.readFile('./f2.txt', 'utf8', (err, data) => {
//     // f2 文件不存在
//     if (err) throw(err)
//     // {
//     //     console.log('Err:' + err)
//     //     return
//     // }
//     console.log('真正读取完成')
//     console.log('文件内容：' + data.toString())
// })
// console.log('读取完成')

// Promise 异步变同步
new Promise((resolve, reject) => {
    data = fs.readFile('./f2.txt', 'utf8', (err, data) => {
        if (err) {
            reject(err)
        } else {
            console.log('文件内容：' + data.toString())
            resolve(data)
        }
    })
}).then(() => {
    console.log('读取完成')
}).catch((err) => {
    console.log(err)
})

// 同步读取
// data = fs.readFileSync('./f2.txt')
// console.log('文件内容：' + data.toString())
// console.log('读取完成')
