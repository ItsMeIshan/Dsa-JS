function reverseArray(arr){
    let start = 0, end = arr.length-1;
    while(start <= end){
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}
let arr = [1,2,3,4,5,6,7];
console.log(arr);
reverseArray(arr);
console.log(arr);