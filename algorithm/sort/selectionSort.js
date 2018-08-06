// 选择排序
// 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置
// 然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾
function selectionSort (arr) {
    var len = arr.length
    var min, temp
    for (let i = 0; i < arr.length; i++) {
        min = i
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[min]) {    // //寻找最小的数
                min = j         //将最小数的索引保存
            }
        }
        [arr[i], arr[min]] = [arr[min], arr[i]]
    }
    return arr
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(selectionSort(arr))