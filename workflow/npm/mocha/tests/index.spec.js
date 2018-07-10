// 引用断言库
const expect = require('chai').expect
const {add} = require('../index')

describe('hello-npm-script', () => {
  // 方法面面都考虑到
  describe('#add', () => {
    // it 用例分组
    it('should return sum when param are numbers', () => {
      // 调用断言库
      expect(add(0, 1)).to.equal(1)
      expect(add(3, 2)).to.equal(5)
    })
    it('should return NaN when param are invalid', () => {
      // 调用断言库
      expect(isNaN(add(0, '1'))).to.be.ok
      expect(isNaN(add(0, 'o'))).to.equal(true)
    })
  })
})