function sort(arr) {
    for (let index = 0; index < arr.length-1; index++) {
        const element = arr[index];
        for (let j = 0; j < arr.length - index; j++) {
            if (arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
        
    }
}
let arr = [1,0,1,1,1,0,0,0,1,0,0,1,1];
console.log(arr);
sort(arr);
console.log(arr);