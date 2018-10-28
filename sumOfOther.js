module.exports = function sumOfOther(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return  arr.map(item => sum - item);
}