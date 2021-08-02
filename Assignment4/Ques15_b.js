function subArrays(arr, ind = 0, leftArr = [], rightArr = [], leftSum = 0, rightSum = 0){
    if(ind === arr.length){
        if(leftSum === rightSum){
            console.log(leftArr, rightArr);
        }
        return;
    }
    leftArr.push(arr[ind]);
    subArrays(arr, ind+1, leftArr, rightArr, leftSum+arr[ind], rightSum);
    leftArr.pop();
    rightArr.push(arr[ind]);
    subArrays(arr, ind+1, leftArr, rightArr, leftSum, rightSum+arr[ind]);
    rightArr.pop();
}
let arr = [1, 3, 2, 4];
subArrays(arr);
