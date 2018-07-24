# jsonp (json with padding)

跨域 ：跨域名、端口、协议

js 请求有一个同源机制，同源才能发起请求，ajax 无法跨域

后端解决跨域问题：koe-cors 

前端方案：jsonp

## example

### 准备
```bash
npm init -y
$ yarn add koa koa-router
```
```
// 服务器端口
nodemon ./server/app.js
// 前端端口
live-server
```

### script 标签
script 标签可以访问外部跨域脚本或地址
如：
```js
<script src="https://cdn.bootcss.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
```

### callback 函数
- 把跨域服务器写成 调用本地的函数
- 传递一个 callback 参数给跨域服务端，然后跨域服务端返回数据时会将这个 callback 参数作为函数名来包裹住 json 数据即可

```js
<script>
    function callback (data) {
        console.log(data)
    }
</script>
<script src="http://localhost:3000/api?jsonpcallback=callback"></script>
```

```js
const callback = ctx.query.jsonpcallback
if (callback) {
    ctx.body = callback + '(' + JSON.stringify(data) + ')'
} else {
    ctx.body = data
}
// script 请求返回一个 callback() ，会立即调用，并把数据当做参数传递进去
```

## 手写 ajax
1. 创建 xhr 对象
```js
var xhr = null
// 兼容ie6 XMLHttpRequest 现代浏览器 
if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest()
} else {
    xhr = new ActiveXObject('Microsoft.XMLHTTP')
}
```
2. 链接服务器
```js
// 请求方式，请求路径，是否异步
xhr.open('GET/POST', url, true)
```
3. 发送请求
```js
// 设置请求头，可无
xhr.setRequestHeader(
    'Content-Type', 'application/x-www-form-urlencoded;charset=UTF8'
)
// 发送请求
xhr.send()
```
4. 接收返回
```js
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
        var status = xhr.status
        if (status >= 200 && status <= 300) {
            // 响应文本 responseText
            var response = JSON.parse(xhr.responseText)
            // 成功回调
            params.success && params.success(response)
        }
    } else {
        // 失败回调
        params.error && params.error(status)
    }
}
```
**readyState**
> 浏览器和服务器交互状态

    0: 未初始化，还没有调用 open() 方法
    1: 载入，已调用 send() 方法，正在发送请求
    2: 载入完成， send() 方法完成，已接收到全部响应内容
    3：解析响应内容
    4: 解析完成
**xhr.status**

    200: OK，访问正常
    301: Moved Permanently，永久移动
    302: Move temporarily，暂时移动
    304: Not Modified，未修改
    307: Temporary Redirect，暂时重定向
    401: Unauthorized，未授权
    403: Forbidden，禁止访问
    404: Not Found，未发现指定网址
    500: Internal Server Error，服务器发生错误
    