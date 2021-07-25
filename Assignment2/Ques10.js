function checkSort(arr, i) {
    if(i == arr.length -1){
        return true;
    }
    if(arr[i] < arr[i+1]){
        return checkSort(arr, i+1);
    }
    return false;
}
let arr = [1,2,3,4,5];
let result = checkSort(arr, 0);
console.log(result);