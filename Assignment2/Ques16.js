let arr = [7, 2 , 6];
let n = arr.length;
for (let index = 0; index < 2 ** n; index++) {
    let setStore = [];
    let i = 0;
    let j = index;
    while(j > 0){
        if(j & 1){
            setStore.push(arr[i]);
        }
        j = j >> 1;
        i++;
    }
    console.log(setStore);
}
