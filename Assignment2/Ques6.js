let loopCount = 0;
function gcd(num1, num2) {
    let smaller = 0, gcd = 0;
    num1 > num2? smaller = num2: smaller = num1;
    for (let index = 2; index * index <= smaller; index++) {
        if((num1 % index == 0) && (num2 % index == 0)) {
            gcd = index;
        }
        loopCount++
    }
    return gcd;
}
console.log(gcd(16, 20));
console.log(loopCount);