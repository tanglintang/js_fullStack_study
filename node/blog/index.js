const path = require('path')
const express = require('express')
const session = require('express-session')
// session 存储在内存 mongodb 放在数据库
const MongoStore = require('connect-mongo')(session)
const flash = require('connect-flash')
const config = require('config-lite')(__dirname)

const app = express()

// 配置模板编译路径
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// 静态资源服务器
// public/ 目录
app.use(express.static(path.join(__dirname, 'public')))

app.listen(config.port, () => {
    console.log(`listen on port ${config.port}`)
})
