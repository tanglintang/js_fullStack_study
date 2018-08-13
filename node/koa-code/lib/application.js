const http = require('http')
const Emitter = require('events')

// node 模块 events，koa 继承自 Emitter 事件，就具有了 事件的-能力 listen、订阅者。。。
module.exports = class Application extends Emitter {

  constructor () {
    super ()
    // 中间件就是一个数组
    this.middlewares = []
  }

  // 基于 http web 服务 createServer 伺服状态
  // listen 之前 调用 callback 之前
  // 访问 中间件时
  // 由于 继承自 Emitter 转化为一个事件
  // 将事件 也就是 执行函数 添加到数组
  // 挨个 执行 callback
  // 保证顺序执行


  // 中间件处理函数的集合
  // 异步需 async await =》 next 传递 =》 end 结束
  use (fn) {
    if (typeof fn !== 'function') {
      throw new TypeError('middleware must be a function')
    }

    this.middlewares.push(fn)
    return this
  }

  onerror () {
    console.log('出错了')
  }

  callback () {
    this.emit('error')
    console.log('callback from middleware')
  }

  listen (...args) {
    this.on('error', this.onerror)
    const server = http.createServer(this.callback())
    return server.listen(...args)
  }
}
