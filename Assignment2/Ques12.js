function evenOddSort(array){
    for (let index = 0; index < array.length -1; index++) {
        for (let j = 0; j < array.length - index; j++) {
            if((array[j] % 2 != 0) && (array[j+1] % 2 == 0)) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
}
let arr = [3,8,5,13,6,12,18,5];
console.log(arr);
evenOddSort(arr);
console.log(arr);