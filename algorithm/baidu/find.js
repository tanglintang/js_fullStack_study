// 需求，一个二维数组中查找
// target 10
// 从小打到排序好的数组

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

console.log(find(1, [
    [1, 2, 3, 4],
    [5, 8, 10, 15],
    [13, 16, 19, 23]
]))