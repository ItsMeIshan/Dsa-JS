let count = 0;
function divideArr(arr, leftArr = [], rightArr = [], leftSum = 0, rightSum = 0, i = 0){
    if(i == arr.length){
        if(leftSum == rightSum){
            console.log(leftArr, rightArr);
            count++;
            return;
        }
        return;
    }
    let ele = arr[i];
    leftArr.push(ele);
    divideArr(arr, leftArr, rightArr, leftSum+ele, rightSum, i+1);
    leftArr.pop();
    rightArr.push(ele);
    divideArr(arr, leftArr, rightArr, leftSum, rightSum+ele, i+1);
    rightArr.pop();
}
let arr = [-1, 3, 7, 4, 2, 1];
let res = divideArr(arr);
console.log(`count is: ${count}`);