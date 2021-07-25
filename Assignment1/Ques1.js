/* Write the pseudocode & a program to input credits of a 
   Code for Cause Campus leader and then output the badge of 
   the lead on the basis of the following criteria:
   a. 7500 <= credits : Tera leader
   b. 6000 <= credits < 7500 : Gega leader 
   c. 4500 <= credits < 6000 : Mega leader 
   d. Credits < 4500 : Rising Star */

/* PseudoCode
start
input credits
if credits is greater than equal to 7500 
    print Tera Leader
else if credits is greater than 7500 is true and credits is greater than equal to 6000 is true
    print Gega Leader
else if credits is greater than 6000 is true and credits is greater than equal to 4500 is true
    print Mega Leader
else 
    print Rising Star
end if
end
*/

let credits = 8000;
if (credits >= 7500) {
    console.log("Tera Leader");
}
else if (credits < 7500 && credits >= 6000) {
    console.log("Gega Leader");
}
else if (credits < 6000 && credits >= 4500) {
    console.log("Mega Leader");
}
else {
    console.log("Rising Star");
}