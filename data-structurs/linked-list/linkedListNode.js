// 链表结点
// 数组 [] 内存分配给我们一定数量的空间，但必须连续存储，灵活性不足
// 链表解决存储空间的连续性问题

export default class LinkedListNode {
  constructor (value, next = null) {
    this.value = value
    this.next = next
  }

  toString (callback) {
    return callback ? callback(this.value) : `${this.value}`
  }
}
