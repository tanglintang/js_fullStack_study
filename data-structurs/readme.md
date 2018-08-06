# 数据结构

## 测试驱动开发
**jest**
> 比 mocha 更专业
jest --init
```js
describe('LinkedList', () => {
  it('should create empty linked list', () => {
    const linkedList = new LinkedList()
    expect(linkedList.toString()).toBe('')
    // 为空
  })
})
```

## 数据处理
数组 []，通过下标
对象 {}，    key

## 链表
存取数据、遍历、取头、取尾、深度...

> ADT 将现实世界之中一些复杂数据结构，但是有规律的，抽象出来
> 称为一个对象 node，并在这个 node 集中一些方法

1. 数组 [] 内存分配给我们一定数量的空间，但必须连续存储，灵活性不足 => 链表解决存储空间的连续性问题

2. 插入：数组的插入需要把 插入位置后面的元素 向后移动，消耗大，空间复杂度O(n)
