// // 函数都有一个属性 prototype
// // __proto__
// // 对象具有私有属性
// function Foo() {
// }

// var Boo = { name: 'Boo' }

// Foo.prototype = Boo

// var f = new Foo()


// // __proto__ 指向构造该对象的构造函数的原型
// console.log(f.__proto__)

// console.log(f.__proto__ === Foo.prototype)  // true
// console.log(f.__proto__ === Boo)    // true
// console.log(Boo === Foo.prototype)  //true

// // 获得 f 的原型链对象
// console.log(Object.getPrototypeOf(f) === f.__proto__)

function Person(name) {
    this.name = name
}

Person.prototype = {
    constructor: Person,
    sayName: function() {
        console.log('My Name is' + this.name)
    }
}
// 构造函数的prototype
 
var p = new Person('佩奇')
console.log(p.__proto__ === Person.prototype)