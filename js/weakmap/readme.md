# weakmap
新的数据结构

也是键值对集合
但

WeakMap 的 key 只能是 **非空对象**
```js
var wm1 = new WeakMap(), wm2 = new WeakMap(), wm3 = new WeakMap()

var o1 = {}, o2 = function() {}

wm1.set(o1, 37)
wm2.set(o2, 'anano')

console.log(wm1.get(o1))    // 37
console.log(wm2.get(o2))    // anano

console.log(wm1.has(o1))    // true
console.log(wm1.delete(o1)) 
console.log(wm1.has(o1))    // false
```

## 拥有和 Map 类似的 api
set(key, value) 、get(key)、has(key)、delete(key) 和 clear() 方法

但没有 size 属性，也没有任何与迭代有关的方法

## 使用
1. 给结点对象添加数据项 属性
```js
<div class="element" data-index="20"></div>

const element = document.querySelector('.element')
alert(element.getAttribute('data-index'))
```

**使用 weakmap**
```js
<div class="element"></div>

const wm = new WeakMap()
wm.set(element, 20)
alert(wm.get(element))
```

2. 做缓存
```js
const cache = new WeakMap()

function countOwnKeys (obj) {
    if (cache.has(obj)) {
        console.log('cached')
        return cache.get(obj)
    } else {
        // Object.keys 消耗大
        const count = Object.keys(obj).length
        cache.set(obj, count)
        return count
    }
}

const obj = {
    a: 1,
    b: 2,
    c: 3
}

/*
    3
    cached
    3
    cached
    3
*/
```
后两次从缓存读取，而不使用 Object.keys

3. 私有访问控制
```js
const privateData  = new WeakMap()

class Person {
    constructor (name, age) {
        this.name = name
        this.age = age
    }
}

const zk = new Person('zk', 18)
zk.name = '曾凯'
// public 属性
// private 通过 get/set 拦截访问权限
console.log(zk.name)
```
```js
const privateData  = new WeakMap()

class Person {
    constructor (name, age) {
        // 每一个实例 作为 对象 私有
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
console.log(zk.name)        // undefined
console.log(zk.getName())   // zk
```

## WeakMap 最大的好处是可以避免内存泄漏
> WeakMap 对它的 key 仅保持 **弱引用**，也就是说它不阻止垃圾回收器回收它所引用的 key

`node --expose-gc` 内存监测

`process.memoryUsage()` 进程，内存使用

key = null
强引用：不能删除 `map` 对 `key` 的引用，无法进行垃圾回收
弱引用：不阻止垃圾回收器回收它所引用的 key
