const Koa = require('koa')
const path = require('path')
const ejs = require('ejs')
const bodyParser = require('koa-bodyparser')
const router = require('koa-router')
const views = require('koa-views')
const session = require('koa-session-minimal')
const MysqlStore = require('koa-mysql-session')
const config = require('./config/default')
// 静态资源服务器       '/' 表示public目录下
const staticCache = require('koa-static-cache')

const app = new Koa()

// session 配置
const sessionMysqlConfig = {
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE,
    host: config.database.HOST
}
// 启用 session
    // 生成一个唯一 的 session_id 并发送回客户端 保存在 cookie 中
app.use(session({
    key: 'USER_SID',
    store: new MysqlStore(sessionMysqlConfig)
}))

// 启用静态服务器以及缓存
app.use(staticCache(path.join(__dirname, './public'), {
    dynamic: true
},{
    maxAge: 365*24*60*60
}))
app.use(staticCache(path.join(__dirname, './images'), {
    dynamic: true
},{
    maxAge: 365*24*60*60
}))

// 配置模板
app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}))

// 表单提交
app.use(bodyParser({
    formLimit: '1mb'
}))

// 启用路由
app.use(require('./routes/posts').routes())
app.use(require('./routes/signup').routes())
app.use(require('./routes/signin').routes())
app.use(require('./routes/signout').routes())

app.listen(config.port)
console.log(`listenin on port ${ config.port }`)
