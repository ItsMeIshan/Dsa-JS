let n = 5, row = 1;
while (row <= n) {
    let col = 1, colMirror = 1, printNum = colMirror - (n - row);
    while (col <= 2*n - 1) {
        if (colMirror <= n-row){
            process.stdout.write(` `);
        }
        else {
            process.stdout.write(`${printNum}` );
        }
        if(col >= n) {
            colMirror--;
            printNum--;
        }
        else{
            colMirror++;
            printNum++;
        }
        col++;
    }
    row++;
    console.log();
}