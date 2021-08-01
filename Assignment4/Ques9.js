/*
 the string begins with an 'a'
 each 'a' is followed by nothing or an 'a' or "bb" 
 each "bb" is followed by nothing or an 'a' 

 Eg: abba 
 Output: true
*/
function check(str, ind = 0) {
    

    let start = str[ind];
    if(start == 'a'){
        // if(str[ind + 1]+str[ind + 2] === 'bb'){

        // }
    }
}
let str = 'abba';
let res = check(str);
console.log(res);
