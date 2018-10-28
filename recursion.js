let tree = {
    "value": 100,
    "left": {
        "value": 90,
        "left": { "value": 70 },
        "right": { "value": 99 }
    },
    "right": {
        "value": 120,
        "left": { "value": 110 },
        "right": { "value": 130 }
    }
};

function recursion(tr, lvl = 0) {
    var tempArr = [...new Array(3).fill(new Array(0))];
    var res1;
    var res2;
    var val;
    for (let key in tr) {
        
            if (key == 'value') {
                val = tr[key];
                console.log(val + ' ' + lvl)
            }
            if (key == 'left') {
                res1 = recursion(tr[key], (lvl + 1));
                if (tempArr[lvl + 1] == undefined) {
                    tempArr[lvl + 1] = [].concat(res1[lvl+1]);
                } else {
                    console.log(res1)
                    console.log(res1 + ' ' + lvl)
                    
                    tempArr[lvl + 1] = [...tempArr[lvl + 1], ...res1[lvl + 1]]
                }
               
            }
            if (key == 'right') {
                res2 = recursion(tr[key], (lvl + 1));
                if (tempArr[lvl + 1] == undefined) {
                    tempArr[lvl + 1] = res2[lvl + 1]
                    console.log(tempArr)
                    console.log(res2[lvl + 1])
                } else {
                    tempArr[lvl + 1] = [...tempArr[lvl + 1], ...res2[lvl + 1]]
                }
            }
            console.log(tempArr)
            console.log(res2)
        
    }
    console.log(val)
    tempArr[lvl] =[ val];
    console.log(tempArr)
    console.log(tempArr.length)
    return tempArr;
}

let array = recursion(tree);
console.log(array);