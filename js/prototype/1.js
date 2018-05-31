var obj = { a: 1 }
'a' in obj
// console.log('a' in obj)
// console.log('toString' in obj)

// obj的原型链对象上是否具有某个名为 name 的属性
// Object.prototype.hasOwnProperty()
// o.hasOwnProperty(name) 自身属性 | in o 自身和原型链上查找
function hasPrototypeProperty(o, name) {
    return name in o && !o.hasOwnProperty(name)
}

console.log(hasPrototypeProperty(obj, 'toString'))

// 函数是一等对象 Object
// Person 可以是 程序员、作曲家、作者的原型对象

function Person(name) {
    this.name = name
}

// js 几乎所有函数都有 prototype 属性
// 像指针一样指向一个对象 (属性和方法的集合)
// prototype 入口？js 所有对象都是由 function 构造的
// 实例 instance： p1 p2 都有自身 的属性 name
// 由Person 构建函数 this.name = name
// Person 构造函数 constructor
// 原型方法 Person.prototype.sayName
// 新的实例化对象构建
// 不是类与对象的父子关系
// 而是原型关系

// constructor指向Person原型链对象
// constructor->prototype
// constructor属性设置  prototype 方法挂载

Person.prototype.getName = function() {
    return this.name
}
// 同
// Person.prototype = {
//     getName: function() {
//         return this.name
//     }
// }

// js 原型式继承
// constructor Person name+books 属性
// prototype Person的方法链 + 方法链(自身的方法)

// 1. 让子对象用于父类的所有属性 
function Author(name, books) {
    // 新的构造函数
    Person.call(this, name)

    this.books = books
}

// 得到person的prototype
extend(Author, Person)

Author.prototype.getBooks = function() {
    return this.books
}

function extend(subClass, superClass) {
    // 空的构造函数
    // 第三者
    var F = function() {}
    F.prototype = superClass.prototype
    // 新的对象 prototype -> F.prototype -> superClass.prototype
    subClass.prototype = new F()
    // 副作用 失去构造函数 被覆盖
    console.log(subClass.prototype.constructor)
    // 重新指向回subClass
    subClass.prototype.constructor = subClass
}


const author = new Author('雨果', ['悲惨世界'])
console.log(author.name)

// author 作为函数 prototype 指向 Author 的 prototype

console.log(author.getBooks())
// console.log(author.getName())       // ReferenceError