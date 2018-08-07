const privateData  = new WeakMap()

class Person {
    constructor (name, age) {
        // this.name = name
        // this.age = age
        privateData.set(this, {
            name, 
            age
        })
    }

    getName() {
        return privateData.get(this).name
    }

    getAge () {
        return privateData.get(this).age
    }
}

const zk = new Person('zk', 18)
// zk.name = '曾凯'
// public 属性
// private 通过 get/set 拦截访问权限
console.log(zk.name)        // undefined
console.log(zk.getName())   // zk
