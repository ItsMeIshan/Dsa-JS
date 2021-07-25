var readlineSync = require('readline-sync');
let size = readlineSync.question("enter the size of the array");
let arr = [];
for (let i = 0; i < size; i++) {
    arr[i] = readlineSync.question(`Enter number for ${i}th index in array`);
}
let count = 0;
for (const multiple of arr) {
    if(multiple % 5 === 0) {
        count++;
    }
}
console.log(`Number of Multiples of 5 in array are ${count}`);


