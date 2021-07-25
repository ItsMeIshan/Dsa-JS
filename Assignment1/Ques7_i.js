let row = 0, n = 5, rowMirror = 0;
while(row < ((2*n) -1)){
    col = 0, colMirror = 0;
    while(col < ((2*n) -1)){
        let lit = n - Math.min(rowMirror, colMirror);
        process.stdout.write(`${lit} `);
        col++;
        if(col < n) {
            colMirror++;
        }
        else{
            colMirror--;
        }
    }
    console.log();
    row++;
    if(row < n){
        rowMirror++;
    }
    else{
        rowMirror--;
    }
}