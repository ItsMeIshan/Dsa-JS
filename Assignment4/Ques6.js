function inverseArr(arr, arr2, ind = 0 ){
    if(ind == arr.length) {
        return;
    }
    let ele = arr[ind];
    arr2[ele-1] = ind + 1;
    inverseArr(arr, arr2, ind+1)
}
let arr = [2, 5, 4, 1, 3];
let arr2 = new Array(arr.length);
console.log(arr);
inverseArr(arr, arr2);
console.log(arr2);
