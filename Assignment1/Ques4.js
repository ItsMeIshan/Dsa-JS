/*
Write a program to print even numbers after odd times jump. E.g: 2, 6, 14, 26, ...
2 (then jump 1 even number 4) -> 6
6 (then jump 3 even numbers 8, 10, 12) -> 14
14 (then jump 5 even numbers 16,18,20,22,24) -> 26
*/
let max = 100, i = 2, jump = -1;
while (i <= max) {
    if (i % 2 == 0) {
        let j = 0;
             while (j < jump){
                i= i + 2;
                j++;
            }
            jump = jump + 2;
        process.stdout.write(`${i} `);
    }
    i++;   
}