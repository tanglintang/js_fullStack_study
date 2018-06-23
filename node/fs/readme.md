# 性能优化

- HTTP 的实例 http 提供

    创建服务器 createServer((req, resp) => {callback})

    web server 将 资源(html, css, json, img) 

    创建读取文件流 createReadStream()

    传输到客户端 client proxy代理

    > 如何优化？    传输体积减小   gzip压缩

    在服务器端是可以进行文件操作    读写、权限、压缩和解压缩

    客户端浏览器
    ```js
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf8',
    })
    ```
    将 带有压缩字段 解压缩unzip

    减少传输体积，快 + 省带宽