有一个无序 的 整型 数组，求出数组 排序后 任意两个 相邻元素 的 最大差值
要求 时间复杂度 和 空间复杂度 较低

[2, 3, 1, 4, 6, 6]

1. 排序
简单排序：冒泡选择插入 O(n^2)
复杂排序：归并快排堆排序 O(nlogn)

选择 **归并排序**
- 拆分数组，拆是为了更好的组合
```js
function mergeSort (arr) {
    return main(arr)

    function main(arr) {
        if (arr.length === 1) return arr

        let mid = Math.floor(arr.length / 2)
        let left = arr.slice(0, mid)
        let right = arr.slice(mid)
        // 递归拆分数组 =》
        return merge(main(left), main(right))
    }

    function merge (left, right) {
        // 最简单的情况：两数比较
        // 其次 四个、八个
        // 但都是排序好的数组
        // 可以分为两种情况：1、直接比较
        // 2、添加两个计数器 i、j
        let il = rl = 0,
            result = []
        while (il < left.length && rl < right.length) {
            if (left[il] < right[rl]) {
                result.push(left[il++])
                // result.push(left[il])
                // il++
            } else {
                result.push(right[rl++])
            }
        }
        // 将没有添加到数组的数据 concat 进去
        return result.concat(left.slice(il)).concat(right.slice(rl))
    }
}
```
> 拆分过程：
// [ 2 ] [ 3 ]
// [ 4 ] [ 6 ]
// [ 1 ] [ 4, 6 ]
// [ 2, 3 ] [ 1, 4, 6 ]
// [ 1, 2, 3, 4, 6 ]

两个指针，il 为左边数组 从 0 开始，
与 rl 即 右边数组 0 下标 比较，
较小值 指针向右移 一位


2. 遍历数组，获得相邻元素的最大差值
一重循环
```js
let result = 0
for (let i = 1; i < arr.length; i++) {
    let diff = arr[i] - arr[i - 1]
    if (result < diff) {
        result = diff
    }
}
```
3. 时间复杂度
N(递归) * logN(分治切割) + N(concat 差值)


4. 
- 时间复杂度小于 N * logN + N ?
- 更快的排序算法 ?
- 桶排序(空间复杂度大)
5. 
[2, 6, 3, 4, 5, 10, 9]
max = 10
min = 29

桶排序
数值放到相应的桶里
2, 3, 4, 5, 6, 空, 空, 9, 10

新的位置 arr[i] - min
