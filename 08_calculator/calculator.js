const add = function(numOne, numTwo) {
	result = 0;
  result = numOne + numTwo;
  return result;
};

const subtract = function(numOne, numTwo) {
	result = 0;
  result = numOne - numTwo;
  return result;
};

const sum = function(array) {
  let result = 0;
  for (let i =0;i<array.length; i++){
    result += array[i];
  }
	return result
};

const multiply = function(array) {
  let result = 1;
  for (let i =0;i<array.length; i++){
    result *= array[i];
  }
  return result;
};

const power = function(numOne, numTwo) {
  let result = 0;
  result = numOne ** numTwo;
  return result;
	
};

const factorial = function(number) {
	let result = 1;
  for (let i =number;i>1; i--){
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
