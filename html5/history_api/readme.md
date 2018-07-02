# vue router 前身
- 网站由网页构成，超链接将网页串联，
- web app - mobile native app(ios, android)
- 多页应用，很多页面，会跳转，重新刷新页面
    > 多页应用缺点
    1. 用户体验差：每次点链接都要等待 http 请求及响应、整个页面的刷新，如果传输时间大于 0.5s 会看到明显的白屏
    2. 相同的 html 片段重复下载
- 解决
1. preventDefault a 跳转
2. 得到 a 标签的 href 属性
3. 使用 jQuery ajax 动态得到 html 内容
4. 将得到的内容进行替换 p content img src
    $().content()、 $().src()

- 致命打击
路径没有跟着改变

# SPA Single Page Application 单页应用

- 页面状态可以对应路由
> SPA 解决了用户体验问题，但却带来另一个及其严重的问题: 浏览记录没了

history.go()/.back(-1)/window.history.forward()

如何为每一个状态改变，路由状态，产生一个路由(url)，并且生成一个历史记录
让 SPA 的访问更像传统的请求，浏览器上地址栏的操作可以使用了

如何主动去设置 history 

    // 看似只有一个页面，但本质还是多个，只是每个页面变成一个状态
    // 我们需要在 SPA 为状态生成一个 history
    // history 路由的堆栈 router 状态对应的数据

    
    // history api 压栈 放入 title、路径 和 数据
    // history.pushState(state, state.title, url)

往浏览器history中塞入一个地址（使用pushState）（这是无刷新的）
自此可看到历史记录和title的改变

问题：无法前进与后退

window.onpopstate 事件：点击后退按钮(或者在JavaScript中调用history.back()方法)时触发；

# 总结
一个页面对应多个页面状态，每个页面状态都会有一个 router 路由（地址, state, 数据），又会用来对应一个组件

vue 单页应用开发，由 router 响应，匹配相应的组件展示，再一直组件化的过程