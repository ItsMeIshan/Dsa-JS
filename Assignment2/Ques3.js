function character(ch){
    let charCode = ch.charCodeAt(0);
    if(charCode > 64 && charCode < 91){
        console.log("UpperCase");
    }
    else if(charCode > 96 && charCode < 123){
        console.log("LowerCase");
    }
}
character('A');