function occur(arr, tar, ind = 0, a = -1) {
    if(ind == arr.length - 1 && a < 0){
        return a;
    }
    else if(ind == arr.length - 1){
        return a;
    }
    let ele = arr[ind];
    if(ele == tar){
        a = ind;
        return occur(arr, tar, ind+1, a);
    }
    return occur(arr, tar, ind+1);
}

let arr = [3, 2, 4, 8, 6, 2, 3];
let result = occur(arr, 1);
console.log(result);
