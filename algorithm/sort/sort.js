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