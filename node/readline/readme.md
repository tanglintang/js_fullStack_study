# readline
> readline 用于从可读流（如 process.stdin）读取数据，每次读取一行
>> 当调用该代码时，Node.js 程序不会终止，直到 readline.Interface 被关闭

## 创建输入输出接口
```js
const rl = readline.createInterface({
    // 进程 全局 process 标准输入输出
    input: process.stdin,
    output: process.stdout
})
```

## api
### rl.question(query, callback)
> rl.question() 方法通过写入到 output 来展示 query，并等待用户提供到 input 的输入，然后调用 callback 函数并传入提供的输入作为第一个参数。

### rl.on('line', line => {})
> 当 input 流接收到接收行结束符（\n、\r 或 \r\n）时触发 'line' 事件
```js
rl.on('line', (input) => {
  console.log(`接收到：${input}`)
})
```

### complete
completer 函数会获取用户输入的当前行作为参数，并返回一个包含以下两个条目的数组
- 一个包含匹配补全输入的数组
- 用于匹配的子字符串

tab 补全

