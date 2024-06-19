const sumAll = function(numOne, numTwo) {
    if (numOne < 0|| numTwo <0 || !Number.isInteger(numOne)|| !Number.isInteger(numTwo)){
        return 'ERROR'
    }
    let total = 0;
    let i = numOne;
    if (numOne>numTwo){
        while (i>=numTwo){
            total+=i;
            i--;
        }
        
    }
    else{
        while (i<=numTwo){
            total+=i;
            i++;
        }
    }
    return total;
};


// Do not edit below this line
module.exports = sumAll;
