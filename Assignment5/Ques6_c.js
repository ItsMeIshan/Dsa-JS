function keypad(str, arr, str2="", ind = 0) {
    if(ind == str.length){
        console.log(str2);
        return;
    }

    let ele = parseInt(str[ind]);
    let ch = arr[ele];
    for (const iterator of ch) {
        keypad(str, arr, str2+iterator, ind+1);
    }
}
let arr = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuvw", "xyz"];
keypad("23", arr);