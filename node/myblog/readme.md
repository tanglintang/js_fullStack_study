## express
koa / express 都是 node 的 server frame

koa egg 使用 async 异步处理
express 使用 callback （4.0支持async）

### 单点入口
- 负责 APP 的实例化，直接给你一个 app 实例，
- listen 监听端口，
- 通过 router 进行分发 服务器资源

### MVC
router 将控制权 --> controller
controller -> view
view 提交数据 -> post|get -> controller -> mdoel

/login
 - controller login.js
               - login.ejs
               - form 提交数据



### 中间件
req 与 res 之间的

路由中间件
```js
app.get('/users/:name', function (req, res) {
    res.send('Hello, ' + req.params.name)
})
```
使用
```js
app.use('/', indexRouter)
app.use('/users', userRouter)
```

### ejs 模板引擎
```html
<!-- html 模板 模板语法 套模板 -->
<h1><%= name.toUpperCase() %></h1>
```
controller 提供数据 给 view 进行渲染 再 发送给客户端
esj 模板的数据就是 C 提供

```js
// 指定路径 esj 模板配置
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
```

通过 render 方法，渲染 ejs 模板，res.render 第一个参数是模板的名字
 users 则会匹配 views/users.ejs
```js
router.get('/:name', (req, res) => {
    res.render('users', {
        name: req.params.name,
        supplies: ['mop', 'broom', 'duster']
    })
})
```

### 中间件 middlewares
> 串联 顺序执行，从上到下，
> 数组，用一组中间件函数来为用户提供服务
> 可以提前结束end，也可以跳过执行next(转交控制权)，每次请求都会执行 中间件
```js
// 两个中间件 函数
app.use((req, res, next) => {
    console.log('1')
    next()
})
// 中间件是可以传递 的
app.use((req, res, next) => {
    console.log('2')
    // 结束 中间件流程
    res.status(200).end
})
```
输出 1 2