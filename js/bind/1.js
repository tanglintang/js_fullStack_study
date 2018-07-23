// Function.prototype.bind2 = function (context) {
//     // console.log(this)       // [Function: bar]
//     const self = this
//     // 获取bind2函数从第二个参数到最后一个参数
//     var args = Array.prototype.slice.call(arguments, 1)
//     return function () {
//         // console.log(context)         // { value: 1 }
//         var bindArgs = Array.prototype.slice.call(arguments)

//         self.apply(this instanceof self ? this : context, args.concat(bindArgs))
//     }
// }

Function.prototype.bind2 = function (context) {
    var self = this
    var args = Array.prototype.slice.call(arguments, 1)
    var fNOP = function () {}

    var fbound = function () {
        var bindArgs = Array.prototype.slice.call(arguments)
        // 当作为构造函数时，this 指向实例，self 指向绑定函数，因为下面一句 `fbound.prototype = this.prototype;`，已经修改了 fbound.prototype 为 绑定函数的 prototype，此时结果为 true，当结果为 true 的时候，this 指向实例。
        // 当作为普通函数时，this 指向 window，self 指向绑定函数，此时结果为 false，当结果为 false 的时候，this 指向绑定的 context。
        console.log('1')
        self.apply(this instanceof self ? this : context, args.concat(bindArgs))

    }
    // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承函数的原型中的值
    fNOP.prototype = this.prototype
    fbound.prototype = new fNOP()

    return fbound
}

var value = 2
var foo = {
    value: 1
}

function bar (name, age) {
    this.habit = 'shopping'
    console.log('value: ' + this.value)
    console.log(name)
    console.log(age)
}

bar.prototype.friend = 'Kevin'
var bindFoo = bar.bind(foo, 'daisy')
var obj = new bindFoo('18')
console.log(obj.habit)
console.log(obj.friend)


// bar.call(foo)
// bar.apply(foo)
// bar.bind(foo)()

// 先得到函数 ( 高阶函数 )
// const bar2 = bar.bind(foo)
// bar 方法 执行 原型链上的方法 bind2 而 bind2 内的 this 就是 bar()
const bar2 = bar.bind2(foo, 'tl')
// 需要执行时再执行
// 运行时传参
// bar2(18)

// bindFoo()
