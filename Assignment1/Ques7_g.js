n =  5;
let row = 1, rowNum=1;
while(row <= ((2*n) - 1)) {
    col = 1, colNum= 1;
    while(col <= (2*n)){
        if(col == n+1){
            colNum++;
        }
        if(colNum <= rowNum){
            process.stdout.write("*");
        }
        else{
            process.stdout.write(" ");
        }
        if(col >= n) {
            colNum--;
        }
        else {
            colNum++;
        }
        col++;
    }
    if(row >= n ) {
        rowNum--;
    }
    else {
        rowNum++;
    }
    console.log();
    row++;
}