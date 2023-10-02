const add = function (num1, num2) {
  return num1+num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (array) {
return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const multiply = function (array) {
  return array.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
};

const power = function (num1,num2) {
return num1**num2;
};

const factorial = function (num) {
  let result = 1; // Initialize the result to 1 for multiplication

  for (let i = num; i > 0; i--) {
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
  factorial,
};
