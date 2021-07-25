let n = 5;
let row = 1, rowNum = 1;
// while (row <= ((2*n)- 1)) {
//     let col = 1, colNum = 1;
//     while (col <= ((2*n)- 1)) {
//         if(colNum <= (n - rowNum)) {
//             process.stdout.write("*")
//         }
//         else {
//             process.stdout.write(" ");
//         }
//         if(col >= n - 1) {
//             colNum--;
//         }
//         else {
//             colNum++;
//         }
//         col++;
//     }
//     if(row >= n-1) {
//         rowNum--;
//     }
//     else {
//         rowNum++;
//     }
//     console.log();
//     row++;
// }


// while(row <= n) {
//     let col = 1, colNum = 1;
//     while(col <= ((2*n) -1)) {
//         if(colNum < n-row){
//             process.stdout.write("*");
//         }
//         else {
//             process.stdout.write(" ");
//         }
//         if(col < n) {
//             colNum--;
//         }
//         else {
//             colNum++;
//         }
//         col++;
//     }
//     console.log();
//     row++;
// }

while(row <= ((2*n) - 1)) {
    let col = 1, colNum = 1;
    while(col <= ((2*n) - 1)) {
        if(colNum <= (n - (rowNum -1)))
        process.stdout.write("*");
        else
        process.stdout.write(" ");
        if(col < n){
            colNum++;
        }
        else{
            colNum--;
        }
        col++;
    }
    if(row < n){
        rowNum++;
    }
    else {
        rowNum--;
    }
    console.log();
    row++;
}