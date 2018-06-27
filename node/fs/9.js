// 文件递归

const fs = require('fs')
const path = require('path')

const getFilesInDir = function(dir) {
    // path.resolve() 方法会把一个路径或路径片段的序列解析为一个 绝对路径
    // console.log(path.resolve(dir))
    let results = [path.resolve(dir)]
    // 读取路径下的所有文件
    const files = fs.readdirSync(dir, 'utf8')
    // console.log(files)
    files.forEach((file) => {
        // 给定的路径的序列是从右往左被处理的
        file = path.resolve(dir, file)
        // console.log(file)
        const stats = fs.statSync(file)
        // 将所有文件遍历出来
        if (stats.isFile()) {
            results.push(file)
        } else if (stats.isDirectory()) {
            results = results.concat(getFilesInDir(file))
        }
    })
    return results
}

const files = getFilesInDir('./files')
console.log(files)