function revArr(arr, start, end){
    if(start == end){
        return;
    }
    [arr[start], arr[end]] = [arr[end], arr[start]];
     revArr(arr, start+1, end -1);
}


let arr = [1, 2, 3];
console.log(arr);
revArr(arr, 0, arr.length-1);
console.log(arr);
