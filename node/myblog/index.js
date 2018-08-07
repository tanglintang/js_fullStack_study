const express = require('express')
const app = express()
const path = require('path')
const indexRouter = require('./routes/index')
const userRouter = require('./routes/users')

// 指定路径 esj 模板配置
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// 两个中间件 函数
app.use((req, res, next) => {
    console.log('1')
    next(new Error('蛤蛤'))
})
// 中间件是可以传递 的
app.use((req, res, next) => {
    console.log('2')
    // 结束 中间件流程
    // res.status(200).end
    next()
})

// 启用中间件 req res 之间
// 路由中间件
app.use('/', indexRouter)
app.use('/users', userRouter)

// 异常捕获函数
app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).send('Something wrong')
})

app.listen(3000)
