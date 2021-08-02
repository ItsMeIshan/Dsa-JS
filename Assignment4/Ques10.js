/*
Take as input str, a string. A “twin” is defined as two instances
 of a char separated by a char. E.g. "AxA" the A's make a “twin”.
“twins” can overlap, so "AxAxA" contains 3 “twins” - 2 for A and 1 for x.
Write a function which recursively counts the number of “twins” in a string.
Print the value returned.
Eg: AXAXA

Output: 3
*/

function twinCounter(str, ind = 0, twinCount = 0){
    //base condition 
    if(ind > str.length - 3) {
        console.log(str[ind], ind);
        console.log(twinCount);
        return twinCount;
    }
    console.log(str[ind], ind);
    if((str[ind] != str[ind + 1]) && (str[ind] == str[ind + 2])) {
        return twinCounter(str, ind+1, twinCount + 1);
    }
}

let str = "AXAXA";
let res = twinCounter(str);
console.log(res);





/*
 if(ind == str.length+1){
        return twinCount;
    }
    let ch = str[ind];
    if(ch == str[ind + 1]) {
        return twinCount = twinCount + 0;
    }
    if(ch == str[ind + 2]) {
        twinCount++;
        return twinCounter(str, ind+1, twinCount);
    }
 */