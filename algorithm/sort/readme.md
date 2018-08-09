# 排序算法

简单排序 冒泡选择插入 
时间复杂度   n*n

- 桶排序    
    利用数组的下标，只要数字大小在下标范围内，当元素值等于下标时，装入桶中      
    时间复杂度：    
    第一重循环 M 最大值 100 次      
    第二重循环 N 数组长度       
    第三重循环 M 有值的桶子     
    嵌套循环   M+N      
    (多层循环是最花时间的)      
    O(M+N+M+N) = O(2*(M+N)) => O(M+N) 系数可以忽略      
    缺点：占用物理内存，因为要分配M个元素的数组     
- 冒泡排序
- 快速排序

35 99 18 76 12

```js
const sourse_arr = [35, 99, 18, 76, 12];
// 桶排序
function sort() {
    const arr = [];
    const a = [];
    for (let i = 0; i < 100; i++) {
        // 大小为 100 的桶
        a[i] = 0;
    }
    for (let i = 0; i < sourse_arr.length; i++) {
        // a 内记录下标
        const item = sourse_arr[i];
        // 重复的值多次记录
        a[item] += 1
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] > 0) {
            // 是否存在重复的值
            for (let j = 0; j < a[i]; j++) {
                arr.push(i)
            }
        }
    }
    return arr;
}

const sorted_arr = sort();
console.log(sorted_arr);        // [ 12, 18, 35, 76, 99 ]
```

## 冒泡排序  
> 比较相邻的元素。如果第一个比第二个大，就交换它们两个
```js
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }           
        }
    }
    return arr
}
```

## 选择排序
首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置

然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾

```js
function selectionSort (arr) {
    var len = arr.length
    var min
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
```

## 插入排序


# 复杂排序

快排、归并排序、堆排序
总时间复杂度 **O(n*log2 n)**


## 快排
**分治思想**：a,  b,  c  + 递归

// 1. 随机选择数组中的一个 数字 A，作为基准 一般找中点
// 2. 其他数字和 A 比较，小于它的放左边，大于它的放右边
// 3. 递归的思想，将左右两边的的数重复以上两步 
// 4. concat 连接起来
```js
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
```
基准值需要切割 log2 n 次
for循环需要 n 次
总时间复杂度 **O(n*log2 n)**

