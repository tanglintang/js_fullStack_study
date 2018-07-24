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