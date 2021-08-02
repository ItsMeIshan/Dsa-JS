/*
 the string begins with an 'a'
 each 'a' is followed by nothing or an 'a' or "bb" 
 each "bb" is followed by nothing or an 'a' 

 Eg: abba 
 Output: true
*/
// function check(str, ind = 0) {
    

//     let start = str[ind];
//     if(start == 'a'){
//         if((str[ind + 1]+str[ind + 2] === 'bb') || str[ind + 1] == ""){
//             if((str[ind + 3] == 'a') || (str[ind + 3] == "")){
//                 return true;
//             }
//             return true;
//         }
//     }
// }
// let str = 'abba';
// let res = check(str);
// console.log(res);

let stringName = "abba";
function checkRule(str) {
    // base case
    if (str.length === 0) {
    return true;
  }
  // if both rules are not followed
  if (str.substring(0, 1) !== "a" && str.substring(0, 2) !== "bb") {
    return false;
  }
  // Variables for different rules
  let checkA = false,
    checkBB = false;
  if (str.substring(0, 1) === "a") {
    checkA = checkRule(str.substring(1));
  } else if (str.substring(0, 2) === "bb") {
    checkBB = checkRule(str.substring(2));
  }
  return checkA || checkBB;
}
console.log(checkRule(stringName));