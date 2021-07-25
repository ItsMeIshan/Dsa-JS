function subsets(arr, arr1, ans){
    if(ans.length === arr.length){
        console.log(ans);
        return;
    }
    for (let idx = 0; idx < arr.length; idx++) {
        if(arr1[idx] === 0){
            arr1[idx] = 1;
            ans.push(arr[idx]);
            subsets(arr, arr1, ans);
            arr1[idx] = 0;
            ans.pop(arr[idx]);
        }
    }

}
let arr = [7, 2, 6];
let arr1 = [0, 0, 0];
let ans = [];
subsets(arr, arr1, ans);
