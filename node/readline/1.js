// readline 用于从可读流（如 process.stdin）读取数据，每次读取一行
const readline = require('readline')

// 创建接口
const rl = readline.createInterface({
    // 进程 全局 process 标准输入输出
    input: process.stdin,
    output: process.stdout
})


rl.question('Please input a word: ', function (answer) {
    // %s 占位符
    console.log('You said %s', answer.toUpperCase())
    rl.close()
})