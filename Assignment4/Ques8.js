function selectionSort(arr, last, ind = 0){
    if(last === 0){
        return;
    }
    let maxInd = maxi(arr, last);
    console.log(maxInd, last);
    // console.log(arr);
    [arr[maxInd], arr[last]] = [arr[last], arr[maxInd]];
    selectionSort(arr, last-1, ind);
}

function maxi(arr, end){
    if(end == 1){
        return arr[0];
    }
    let res = Math.max(arr[end], maxi(arr, end -1))
}
let arr = [5,4,3,2,1];
let searchSpace = arr.length-1;
selectionSort(arr, searchSpace);
console.log(arr);
// let res = maxi(arr, searchSpace);
// console.log(res);