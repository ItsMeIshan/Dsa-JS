let n = 6, row = 3, printNum = 1;
let arr = [1, 1];
//edge cases
if(n === 1) {
    console.log('1');
}
else if(n === 2) {
    console.log('1\n1 1');
}
else {
    console.log('1\n1 1');
    for(let index = 0; index < n - 2; index++ ){
        let string = '1';
        for (let i = 0; i < arr.length -1; i++) {
                 let sum = arr[i] + arr[i+1];
                 string += " " + sum;
        }
        let copyArr = [];
         for (let index = 0; index < arr.length - 1; index++) {
           let element = arr[index] + arr[index + 1];
           copyArr.push(element);
         }
         copyArr.push(1);
         copyArr.unshift(1);
         arr = Array.from(copyArr);
         string += " 1";
         console.log(string);
    }
    
}

