# ajax 2.0 IE10+

1. FormData
> 容器，添加数据-传递
- set/get
```js
// 以前
xhr.open('get', './a.php?a=12&b=6', true)
```
```js
// ajax2
var formData = new FormData()
formData.set('a', 12)
formData.set('b', 6)

// 需要使用 post 方式
xhr.open('post', './a.php', true)
xhr.send(formData)
```
- append
```js
// 结果是 6，只会显示最后追加的
formData.set('a', 12)
formData.append('a', 6)
```
2. 文件上传、上传进度监控
formData.set('名', <input type="file"/>)
**xhr.upload 对象**

    xhr.upload.onload: 上传完成
    xhr.upload.onprogress: 进度变化

```js
// 事件对象 ev
xhr.upload.onprogress = function (ev) {
    console.log(ev.loaded + '/' + ev.total)
}
```
3. cors 跨域
报错
```
Failed to load http://localhost:8080/: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'null' is therefore not allowed access.
```
需要加 header
```js
const http = require('http')

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.write('asdas')
    res.end()
})

server.listen(8080)
```
