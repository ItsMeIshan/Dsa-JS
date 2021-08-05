function keypad(str, arr, arr2, str2="", ind = 0) {
    if(ind == str.length){
        arr2.push(str2);
        return;
    }

    let ele = parseInt(str[ind]);
    let ch = arr[ele];
    for (const iterator of ch) {
        keypad(str, arr, arr2, str2+iterator, ind+1);
    }
    return arr2.length;
}
let arr = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuvw", "xyz"];
let arr2 = [];
let res = keypad("23", arr, arr2);
console.log(res);