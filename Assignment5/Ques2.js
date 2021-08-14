function ratInMaze(row, col, arr = [], str = ""){
    if(row == 0 && col == 0){
        arr.push(str);
        return;
    }
    if(col< 0 || row < 0){
        return;
    }
    ratInMaze(row - 1, col, arr, str + 'v');
    ratInMaze(row, col - 1, arr, str + 'h');
    return arr;
}
let res = ratInMaze(2,2);
console.log(res);