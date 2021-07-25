/*
Write a program to count the number of digits in a number.
*/

let input = 123456;
let count = 0;
while (input > 0) {
    count++;
    input = parseInt(input / 10);
}
console.log(`The Number of Digits = ${count}`);
