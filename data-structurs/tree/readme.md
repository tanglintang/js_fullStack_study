# 树状结构

> 结点 element，有值、子节点，利用树进行查找、遍历

- 基于树：（树状结构）
Map Set
HTML DOM
React VNode DOM、Diff 算法(逐层比对值和属性)

## 二叉树
![](https://upload-images.jianshu.io/upload_images/572639-82ca8b27d589b9dd?imageMogr2/auto-orient/strip%7CimageView2/2/w/700)

只有两个结点，只有左子树 右子树

### 完美二叉树（满二叉树）
**除了叶结点** 外 每一个结点 都有 **左右子叶** 且 **叶子结点都处在最底层**
拥有全部结点、
深度为 k ，拥有 2^(k+1) - 1 个结点

叶子数 = 2^(k-1)

> 特例：二叉搜索树 BTS （Binary Search Tree）
1. 二叉树
每颗最小数满足
2. 左子节点 < 父节点 < 小于右节点及其子节点

- BST 节点的插入
1. 如果树中没有任何节点，那么就是根节点
2. 如果节点 比树的 根节点 或 树的节点值更大，则放在右子树，反之则放在左子树
3. 递归(2)，直至找到空位，插入新的节点

> BST 遍历形式
1. 中序遍历
以最小到最大的顺序遍历所有节点
```js
    function inOrderTravelsNode(node, callback) {
        if (node !== null) {
            inOrderTravelsNode(node.left, callback)
            callback(node.key)
            inOrderTravelsNode(node.right, callback)
        }
    }
```
2. 先序
祖先节点优先于后代节点的顺序遍历
3. 后序
先访问节点的后代节点，再访问节点本身