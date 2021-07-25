function reverseNum(num){
    let rev = 0, pos = 1;
    while(num != 0){
        let dig = 0;
        dig = num % 10;
        rev = dig + rev*10;
        num = parseInt(num/10);
    }
    return rev
}
console.log(reverseNum(38105));