// 选择排序
// 时间复杂度O(n^2)

// 找到数组中最小的放在第一位、第二小的放在第二位...
// 基址查询

function selectionSort (arr) {
    let len = arr.length
    for (let i = 0; i < len; i++) {
        let min = i
        for (let j = i; j < len; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        if (min !== i) {
            [arr[i], arr[min]] = [arr[min], arr[i]]
        }
    }
    return arr
}

const arr = [1, 5, 8, 45, 23, 65, 75, 2, 8]

console.log(selectionSort(arr))
