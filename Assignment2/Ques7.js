
function lcm(num1, num2) {
    let greater = num1 > num2 ? num1 : num2;
    let lcm = greater;
    let threshold = num1*num2;
    while(lcm <= threshold) {
        if((lcm % num1 == 0) && (lcm % num2 == 0)) {
            return lcm;
        }
    lcm = lcm + greater;
}
}
console.log(lcm(16, 20));
