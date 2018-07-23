# bind
`bind` 方法会返回一个新函数，新函数执行时，方法体是 `bind` 前的函数，`this` 指向第一个参数。

## call、apply、bind 实例
```js
var foo = {
    value: 1
}

function bar () {
    console.log(this.value)
}

// bar.call(foo)
// bar.apply(foo)
// bar.bind(foo)()

// 先得到函数
const bar2 = bar.bind(foo)
// 需要执行时再执行
bar2()
```

## bind 实现过程
1. 返回一个新的函数(高阶函数)
```js
return function () { bar() }
```
2. this 的指向 **利用闭包，找到定义时候的上下文环境**
```js
// 手动实现
Function.prototype.bind2 = function (context) {
    console.log(this)       // [Function: bar]
    const that = this
    return function () {
        // console.log(context)         // { value: 1 }
        that.apply(context)
    }
}
```