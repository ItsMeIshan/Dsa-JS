function tar(arr, target, subsets, i = 0, sum = 0, subset = []){
    if(i == arr.length){
        if(sum === target){
            let temp = [...subset];
            subsets.push(temp);
            return;
        }
        return;
    }
    let ele = arr[i];
    subset.push(ele);
    tar(arr, target, subsets, i+1, sum+ele, subset);
    subset.pop();
    tar(arr, target, subsets, i+1, sum, subset);
    return;
}
let arr = [1,4,2,3];
let subsets = []
tar(arr, 5, subsets);
console.log(subsets);


