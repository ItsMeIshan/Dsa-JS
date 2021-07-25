function tripletSum(arr, target) {
    let i = 0;
    while(i < arr.length) {
        let start = i+1, end = arr.length-1;
        while(start < end){
            if((arr[i] + arr[start] + arr[end]) == target){
                console.log(`(${arr[i]}, ${arr[start]}, ${arr[end]})`);
            }
            if(arr[i] + arr[start] + arr[end] < target) {
               start++; 
            }
            else{
                end--;
            }
        }
        i++;
    }
}
let arr = [3, 1, 2, 9, 7, 5, -1, 6];
arr.sort();
tripletSum(arr, 9);


