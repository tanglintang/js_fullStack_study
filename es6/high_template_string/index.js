// 转义字符 \
// /\[\]/ 方括号转义

// let message = `Hello World \``
let message = `
    <ul>
        <li>1</li>
        <li>2</li>
    </ul>
`.trim()
// \t 的意思是 横向跳到下一制表符位置
// \r 的意思是 回车
// \n 的意思是回车换行
console.log(message)