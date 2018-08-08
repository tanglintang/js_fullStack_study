function binary_search(arr, low, high, key) {
    if (low > high) {
        return -1
    }
    var middle = Math.floor((high + low) / 2)
    if (arr[middle] == key) {
        return middle
    } else if (arr[middle] > key) {
        high = middle - 1
        return binary_search(arr, low, high, key)
    } else if (arr[middle] < key) {
        high = middle + 1
        return binary_search(arr, low, high, key)
    }
}


var arr = [1, 2, 3, 5, 8, 9, 11, 15, 16, 18, 21, 23, 56, 64, 72, 889]
var l = arr.length - 1
var result = binary_search(arr, 0, l, 23)
console.log(result)