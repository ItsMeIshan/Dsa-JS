/* 
Write the pseudocode & the program to calculate GCD of two numbers.
*/

/*
start 
input a, b
if a > b 
    smaller <- b
else 
    smaller <- a
end if
i <- 2
loop i < smaller
    if a % i = 0 is true and b % i = 0 is true
        GCD = i
        i <- i + 1
    else
        i <- i + 1
    end if
end loop
print GCD
stop        
*/
let a = 16, b = 20;
let smaller, Gcd, i;
i = 2;
a > b ? smaller = b : smaller = b;
while (i < smaller) {
    if ( a % i == 0 && b % i == 0) {
        Gcd = i;
        i++;
    } else {
        i++;
    }
}
console.log(`Greatest Common Divisor ${Gcd}`);
