import LinkedListNode from './linkedListNode'
import { link } from 'fs';

export default class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  // 以数组的形式 返回 value
  toArray () {
    const nodes = []
    let currentNode = this.head
    while(currentNode) {
      nodes.push(currentNode)
      currentNode = currentNode.next
    }
    return nodes
  }

  append (value) {
    const newNode = new LinkedListNode(value)
    // head 为 null 链表是空的
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      return this
    }

    this.tail.next = newNode
    this.tail = newNode

    // 支持链式调用
    return this
  }

  prepend (value) {
    const newNode = new LinkedListNode(value, this.head)
    this.head = newNode
    // tail 为 null
    if (!this.tail) {
      this.tail = newNode
    }

    return this
  }

  delete (value) {
    if (!this.head) {
      return null
    }

    let deleteNode = null

    // 头结点存在且 即为 value
    while (this.head && this.head.value === value) {
      deleteNode = this.head
      this.head = this.head.next
    }

    let currentNode = this.head

    if (currentNode !== null) {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          deleteNode = currentNode.next
          currentNode.next = deleteNode.next
        } else {
          currentNode = currentNode.next
        }
      }
    }

    // 如果删除的是 tail 结点
    if (this.tail.value === value) {
      this.tail = currentNode
    }

    return deleteNode

  }

  find ({value = undefined, callback = undefined}) {
    if (!this.head) {
      return null
    }

    let currentNode = this.head

    while (currentNode) {
      if (callback && callback(currentNode.value)) {
        return currentNode
      }
      if (value !== undefined && currentNode.value === value) {
        return currentNode        
      }
      currentNode = currentNode.next
    }

    return null
  }

  toString(callback) {
    return this.toArray().map(node => node.toString(callback)).toString()
  }
}