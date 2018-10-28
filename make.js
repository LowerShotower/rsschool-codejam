module.exports = function make(...arr) {
    let tempArr = [];
    tempArr.push(arr[0]);
    var summ = 0;
    function tempF(...nextArr) {
        if (typeof (nextArr[0]) != "function") {
            for (let i = 0; i < nextArr.length; i++) {
                tempArr.push(nextArr[i]);
            }
            return tempF;
        } else {
            for (let i = 0; i < tempArr.length; i++) {
                summ = nextArr[0](summ, tempArr[i]);
            }
            return summ;
        }
    }
    return tempF;
}