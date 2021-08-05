function recX(str, ind = 0){
    if(ind === str.length-1){
        return str;
    }
    let ch = str[ind];
    if(ch === 'x'){
        let newStr = str.slice(ind+1);
        let replaceStr = str.substring(0, ind);
        let modifiedStr = replaceStr + newStr + 'x';
        return recX(modifiedStr, ind+1);
    }
    return recX(str, ind+1);
}
let res = recX('abexexdexed');
console.log(res);