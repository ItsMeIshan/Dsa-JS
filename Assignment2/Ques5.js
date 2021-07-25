/*
Write a program to calculate inverse of a number.
(For calculating inverse, you should have a valid input i.e, for a 
number of n digits, the value of each digit should be 1 to n and is unique.)
25413 -> 41532 (in “25413” 2 is at 1st place therefore 1 is placed on 2nd place 
in “41532”. 5 is at 2nd place in “25413” therefore 2 is at 5th place in “41532” and so on.
*/

function calcInverse(num) {
    //checking if unique or not ?
    let number = [], inverse = [];
    while(num != 0) {
        let digit = 0;
        digit = num % 10;
        let condition = (digit >= 1 && digit <= num);
        if (!condition) {
             return "not a valid input";
        }
        else {
            number.unshift(digit);
        }
        num = parseInt(num/10);
    }
    //code starts from here
    
    for (let idx = 0; idx < number.length; idx++) {
        let pos = idx;
        let element = number[idx];
        inverse[element - 1] = pos + 1;
    }
    return inverse.join("");
}
console.log(calcInverse(25413));