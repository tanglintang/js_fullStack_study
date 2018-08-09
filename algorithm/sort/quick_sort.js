// 分治
// 1. 随机选择数组中的一个 数字 A，作为基准 中点
// 2. 其他数字和 A 比较，小于它的放左边，大于它的放右边
// 3. 递归的思想，将左右两边的的数重复以上两步
// 4. concat 连接起来


const arr = [85, 24, 63, 45, 17, 31, 96, 50]

function quickSort (arr) {
    // 完成后退出
    if (arr.length <= 1) {
        return arr
    }
    // 基准点
    let pivotIndex = Math.floor(arr.length / 2)
    // 基准点是排好序的
    let pivot = arr.splice(pivotIndex, 1)[0]
    let left = [], right = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(pivot, quickSort(right))
}

console.log(quickSort(arr))
