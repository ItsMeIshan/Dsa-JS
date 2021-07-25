function deciToOcta(n) {
    let pos = 1, octa = 0;
    while(n!=0){
        rem = n%8;
        octa = octa + rem*pos;
        pos=pos*10;
        n = parseInt(n/8);
    }
    return octa;
}
console.log(deciToOcta(453));