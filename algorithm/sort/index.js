const arr = [35, 99, 18, 76, 12]

for (let i = 0, l = arr.length; i < l; i++) {
    for (let j = i + 1; j < l; j++) {
        if (arr[i] < arr[j]) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }        
    }
}
console.log([...arr])
