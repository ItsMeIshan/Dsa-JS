let n = 5, row = 1;
while (row <= n) {
    let col = 1;
    while (col <= row) {
        process.stdout.write(`${col} ` );
        col++;
    }
    row++;
    console.log();
}