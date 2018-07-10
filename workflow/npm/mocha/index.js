const add = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b
  }
  return NaN
}

// console.log(add(1, '2'))    // 测试用例

// es6 模块化方案
// export default {
//   add
// }

// commonjs 模块化方案
module.exports = { add }
