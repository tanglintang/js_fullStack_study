# mocha 测试框架
> 运行测试脚本

## 安装测试框架和断言库
`$ yarn add mocha chai -D`

## 测试文件
> 测试脚本与所要测试的源码脚本同名，但是后缀名为.test.js（表示测试）或者.spec.js（表示规格）。比如，add.js的测试脚本名字就是add.test.js。

>> 测试脚本里面应该包括一个或多个 describe(测试套件) 块，每个 describe(测试用例) 块应该包括一个或多个it块。

```js
// index.spec.js
// 引用断言库
const expect = require('chai').expect
const {add} = require('../index')

describe('hello-npm-script', () => {
  // 方法面面都考虑到
  describe('#add', () => {
    // it 用例
    it('should return sum when param are numbers', () => {
      // 调用断言库
      expect(add(0, 1)).to.equal(1)
    })
  })
})
```

## api
- to.euqal
- to.be.ok

## isNaN
NaN =>属于 Number 出现在无法运算的特殊行为 如： 2/0 、 1 + {'a': b}
```js
isNaN(NaN);       // true
isNaN(undefined); // true
isNaN({});        // true
isNaN("37,5");    // true
isNaN('123ABC');  // true:  parseInt("123ABC")的结果是 123, 但是Number("123ABC")结果是 NaN
isNaN(true);      // false
isNaN(null);      // false
isNaN(37);        // false
```
数学计算的时候 js 强制类型转换

1 + '2' = '12'      
隐式转换为 Number('12') = 12        
进行 isNaN() = false         
'' 字符串拼接优先级大于加法

Boolean true、false 会被隐式转换为 0、1 所以 isNaN(true/false) 会是 false


