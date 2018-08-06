// 冒泡排序  比较相邻的元素。如果第一个比第二个大，就交换它们两个

// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//             }           
//         }
//     }
//     return arr
// }

// 改进的冒泡
function bubbleSort(arr) {
    var i = arr.length - 1; //初始时,最后位置保持不变
    while (i > 0) {
        var pos = 0; //每趟开始时,无记录交换
        for (var j = 0; j < i; j++)
            if (arr[j] > arr[j + 1]) {
                pos = j; //记录交换的位置
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        i = pos; //为下一趟排序作准备
    }
    return arr
}

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(bubbleSort(arr))