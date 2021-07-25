function pairSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i] + arr[j] == target){
                console.log(`(${arr[i]}, ${arr[j]})`);
            }
        }
    }        
}
let arr = [3, 1, 11, 2, 9, 7, 4, 5, -1, 13, 6];
pairSum(arr, 8);
