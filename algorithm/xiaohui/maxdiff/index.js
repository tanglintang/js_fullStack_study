// 采用分治思想
// 分为两个数组 left right  n / 2()

let arr = [2, 3, 1, 4, 6]

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
        console.log(left, right)
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
        return result.concat(left.slice(il)).concat(right.slice(rl))
    }
}

// [ 2 ] [ 3 ]
// [ 4 ] [ 6 ]
// [ 1 ] [ 4, 6 ]
// [ 2, 3 ] [ 1, 4, 6 ]
// [ 1, 2, 3, 4, 6 ]

arr = mergeSort(arr)
console.log(arr)

let result = 0
for (let i = 1; i < arr.length; i++) {
    let diff = arr[i] - arr[i - 1]
    if (result < diff) {
        result = diff
    }
}

console.log(result)
