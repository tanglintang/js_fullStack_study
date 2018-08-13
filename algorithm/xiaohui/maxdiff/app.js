function getMaxDiff (arr) {
    // 1. 利用桶排序 (计数排序)
    // 2. 相邻空桶的最大值就是结果
    // O(2n)
    // newArr[0] = min
    // newArr[newArr.length] = max
    let min = max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    // 新数组的长度为
    const newArr = new Array(max - min + 1)
    for (let i = 0; i < arr.length; i++) {
        // 原数组每一项 在新的数组 的下标为  arr[i] - min
        newArr[arr[i] - min] = arr [i]
    }
    console.log(newArr)

    let result = k = 0
    for (let i = 0; i < newArr.length; i++) {
        if (!newArr[i]) {
            k++
        } else {
            if (k > result) {
                result = k
            }
            k = 0
        }  
    }
    return result
}

const arr = [2, 6, 3, 4, 5, 10, 9]

console.log(getMaxDiff(arr))

// 空间复杂度 N(arr) + K(newArr)
// 时间复杂度 O(3N+K) k 可以省略