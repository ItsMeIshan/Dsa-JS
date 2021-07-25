/*
Write a program to reverse a number (9735 -> 5379)
*/

let input = 9735, rev = 0;
while (input > 0) {
    let digit = input % 10;
    rev = rev*10 + digit;
    input = parseInt(input/10);
}
console.log(rev);