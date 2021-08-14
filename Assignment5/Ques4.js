let result = false;
function ratInMaze3(row, col, arr, visited, rowLen, colLen){
    if(row === rowLen-1 && col === colLen-1 && result === false){
        console.log(visited);
        result = true;
        return;
    }
    // console.log(row, col);
    // console.log(visited);
    if(col+1 <= colLen-1 && visited[row][col + 1] === 0 && arr[row][col + 1] === "O"){
        visited[row][col+1] = 1;
        ratInMaze3(row, col +1, arr, visited, rowLen, colLen);
        visited[row][col+1] = 0;
    }
    if(row+1 <= rowLen-1 && visited[row+1][col] === 0 && arr[row+1][col] === "O"){
        visited[row+1][col] = 1;
        ratInMaze3(row+1, col, arr, visited, rowLen, colLen);
        visited[row+1][col] = 0;
    }
    return;
}
let inputArr = [
    ["O", "X", "O", "O"],
    ["O", "O", "O", "X"],
    ["O", "O", "X", "O"],
    ["X", "O", "O", "O"],
    ["X", "X", "O", "O"],
  ];
let visited = [];
for(let i =0; i<inputArr.length; i++){
    let row = new Array(inputArr[0].length);
    row.fill(0);
    visited.push(row);
}
visited[0][0] = 1;
let rowLen = inputArr.length; 
let colLen = inputArr[0].length;
ratInMaze3(0, 0, inputArr, visited, rowLen, colLen);


// let input = [
//     ["O", "X", "O", "O"],
//     ["O", "O", "O", "X"],
//     ["O", "O", "X", "O"],
//     ["X", "O", "O", "O"],
//     ["X", "X", "O", "O"],
//   ];
//   let N = input.length;
//   let M = input[0].length;
//   let visited = new Array(N).fill().map(() => new Array(M).fill(0));
//   visited[0][0] = 1;
//   let answer = false;
//   function solution(input, visited, i, j, n, m) {
//    if (i === input.length - 1 && j === input[0].length - 1 && answer === false) {
//       console.log(visited);
//       answer = true;
//       return;
//     }
//       if (j + 1 <= m - 1 && visited[i][j + 1] === 0 && input[i][j + 1] === "O") {
//       visited[i][j + 1] = 1;
//       solution(input, visited, i, j + 1, n, m);
//       visited[i][j + 1] = 0;
//     }
//     if (i + 1 <= n - 1 && visited[i + 1][j] === 0 && input[i + 1][j] === "O") {
//       visited[i + 1][j] = 1;
//       solution(input, visited, i + 1, j, n, m);
//       visited[i + 1][j] = 0;
//     }
//     return;
//   }
//   solution(input, visited, 0, 0, N, M);