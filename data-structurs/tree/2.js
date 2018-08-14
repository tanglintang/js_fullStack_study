// 二叉搜索树

function BinarySearchTree() {
    var  Node = function(key) {
        this.key = key
        this.left = null
        this.right = null
    }

    // 插入节点
    function insertNode(node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode
            } else {
                insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode
            } else {
                insertNode(node.right, newNode)
            }
        }
    }

    function inOrderTravelsNode(node, callback) {
        if (node !== null) {
            inOrderTravelsNode(node.left, callback)
            callback(node.key)
            inOrderTravelsNode(node.right, callback)
        }
    }

    function preOrderTravelsNode(node, callback) {
        if (node !== null) {
            callback(node.key)
            preOrderTravelsNode(node.left, callback)
            preOrderTravelsNode(node.right, callback)
        }
    }

    function postOrderTravelsNode(node, callback) {
        if (node !== null) {
            postOrderTravelsNode(node.left, callback)
            postOrderTravelsNode(node.right, callback)
            callback(node.key)
        }
    }

    function maxNode(node) {
        if (node) {
            while (node.right !== null) {
                node = node.right
            }
            return node.key
        }
        return null
    }

    function searchNode(node, key) {
        if (node === null) {
            return false
        }
        if (key < node.key) {
            return searchNode(node.left, key)
        } else if (key > node.key) {
            return searchNode(node.right, key)
        } else {
            return true
        }
    }

    var root = null

    this.insert = function(key) {
        var newNode = new Node(key)
        if (root === null) {
            root = newNode
        } else {
            insertNode(root, newNode)
        }
    }

    this.inOrderTravels = function(callback) {
        inOrderTravelsNode(root, callback)
    }
    // 先序
    this.preOrderTravels = function(callback) {
        preOrderTravelsNode(root, callback)
    }
    // 后序
    this.postOrderTravels = function(callback) {
        postOrderTravelsNode(root, callback)
    }
    // 最大值
    this.max = function() {
        return maxNode(root)
    }
    // 搜索
    this.search = function(key) {
        return searchNode(root, key)
    }
}

const tree = new BinarySearchTree()
tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)
tree.insert(6)

var printNode = function(val) {
    console.log(val)
}

// 中序遍历
// tree.inOrderTravels(printNode)
// 先序
// tree.preOrderTravels(printNode)
// 后序
// tree.postOrderTravels(printNode)

// console.log(tree.max())
console.log(tree.search(18))
