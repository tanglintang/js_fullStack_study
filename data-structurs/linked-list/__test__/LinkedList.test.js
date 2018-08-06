import LinkedList from '../linkedList'

describe('LinkedList', () => {
  it('should create empty linked list', () => {
    const linkedList = new LinkedList()
    expect(linkedList.toString()).toBe('')
    // 为空
  })

  // append
  it('should append node to linked list', () => {
    const linkedList = new LinkedList()

    // head tail 为 null
    expect(linkedList.head).toBeNull()
    expect(linkedList.tail).toBeNull()

    // 链式调用
    linkedList.append(1).append(2).append(3)

    expect(linkedList.toString()).toBe('1,2,3')
  })

  // prepend
  it('should prepend node to list', () => {
    const linkedList = new LinkedList()
    linkedList.append(1).append(3)

    expect(linkedList.head.toString()).toBe('1')
    expect(linkedList.tail.toString()).toBe('3')

    linkedList.prepend(2)
    expect(linkedList.toString()).toBe('2,1,3')
  })

  // delete
  it('should delete node by value from linked list', () => {
    const linkedList = new LinkedList()
    expect(linkedList.delete(5)).toBeNull()

    linkedList.append(1).append(1).append(2).append(3).append(3).append(3).append(4).append(5)

    expect(linkedList.head.toString()).toBe('1')
    expect(linkedList.tail.toString()).toBe('5')

    const deleteNode = linkedList.delete(3)
    expect(deleteNode.value).toBe(3)
    expect(linkedList.toString()).toBe('1,1,2,4,5')
  })

  // find
  it('should find node by value', () => {
    const linkedList = new LinkedList()
    expect(linkedList.find({ value: 5 })).toBeNull()

    linkedList.append(1).append(2).append(3)

    const node = linkedList.find({ value: 2 })
    expect(node.value).toBe(2)

    expect(linkedList.find({ value: 5 })).toBeNull()
  })
})