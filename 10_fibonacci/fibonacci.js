const fibonacci = function(number) {
    if (number<0){
        return 'OOPS';
    }
    if (number === 0 ||number === '0'){
        return 0;
    }
    if (number === 1){
        return a;
    }
    if (number ===2){
        return b;
    }
    let a=0;
    let b=1;
    for (let i = 1;i<number; i++){
        let next = a+b;
        a=b;
        b=next;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
