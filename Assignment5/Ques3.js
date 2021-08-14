function ratInMaze2(row, col, arr = [], str = ""){
    if(row == 0 && col == 0){
        arr.push(str);
        return;
    }
    if(col< 0 || row < 0){
        return;
    }
    ratInMaze2(row - 1, col, arr, str + 'v');
    ratInMaze2(row, col - 1, arr, str + 'h');
    ratInMaze2(row -1, col -1, arr, str + 'd')
    return arr;
}
let res = ratInMaze2(2,2);
console.log(res);