## 二分查找算法
> 猜 1 - 1000 之间的一个正整数 要猜多少次？

## 使用二分查找思想，从一个排序好的二维数组查找，一重循环
```js
function find (target, arr) {
    let i = 0, j =arr[i].length - 1

    while (i < arr.length && j >= 0) {  // 防止越界
        if (arr[i][j] < target) {       // 判断 每一行的最后一个 是否小于target
            i++            
        } else if (arr[i][j] > target) {  // 从后向前遍历
            j--
        } else {
            return true
        }
    }
    return false
}
```

## 二分查找是一种分而治之思想 的算法
1. 数组中排在中间的数字 A ，与它进行比较大小
2. 因为数组有序，（如果没有，先快排一下）
    - A 较大，说明应该从前半部分查找
    - A 较小，从后半部分查找
3. 递归前两步

## 递归

## 斐波那契数列 fabo.js
1. 递归
```js
let count = 0
function fabo (n) {
    count++
    if (n == 1 || n == 2) {
        return 1
    }
    return fabo(n - 1) + fabo(n - 2)
}

console.log(fabo(20), count)
// 6765 13529
```

递归的次数太多，应该使用 for while 来代替 递归

2. 通过闭包对象缓存
```js
let count = 0

function fn(n) {
    let cache = {}

    function _fn(n) {
        if (cache[n]) {
            return cache[n]
        }
        count++
        if (n == 1 || n == 2) {
            return 1
        }

        let prev = _fn(n - 1)
        cache[n - 1] = prev
        let next = _fn(n - 2)
        cache[n - 2] = next
        return prev + next
    }

    return _fn(n)
}

console.log(fn(20), count)      // 6765 20
```