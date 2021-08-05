//doubt!!!!!

function keypad(str, arr, str2="", ind = 0) {
    if(ind == str.length){
        console.log(str2);
        return;
    }

    let ele = parseInt(str[ind]);
    let ch = arr[ele];
    keypad(str, arr, str2+ch, ind+1);
}
let arr = ["", "a", "b", "c", "d", "d", "e", "f", "g", "h", "i", "j", "k", 
"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
keypad("1123", arr);
