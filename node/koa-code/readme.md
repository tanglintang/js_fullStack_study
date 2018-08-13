# 手写一个 Koa 

> 中间件工作流程
  基于 http web 服务 createServer 伺服状态
  listen 调用 callback 之前
  访问 中间件时
  由于 继承自 Emitter 转化为一个事件
  将事件 也就是 执行函数 添加到数组
  挨个 执行 callback
  保证顺序执行

## node 模块之 event
```js
class Application extends Emitter {}
```
> node 模块 events，koa 继承自 Emitter 事件，就具有了 事件的-能力 listen、订阅者。。。

1. listen
```js
  listen (...args) {
    const server = http.createServer(this.callback())
    return server.listen(...args)
  }
```

2. middleware
```js
  constructor () {
    super ()
    // 中间件就是一个数组
    this.middlewares = []
  }
```

3. use 方法
```js
  // 中间件处理函数的集合
  // 异步需 async await =》 next 传递 =》 end 结束
  use (fn) {
    if (typeof fn !== 'function') {
      throw new TypeError('middleware must be a function')
    }
    // 将事件 也就是 执行函数 添加到数组
    this.middlewares.push(fn)
    // 支持链式 调用
    return this
  }
```