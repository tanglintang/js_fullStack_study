# 排序算法

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