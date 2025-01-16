let num1 = parseFloat(prompt("Enter first number"));
let operator = prompt("Enter operator");
let num2 = parseFloat(prompt("Enter second number"));
let result;


const add = function(num1, num2) {
    return (num1 + num2);
  };
  
  const subtract = function(num1, num2) {
    return (num1 - num2);
  };
  
  const multiply = function(num1, num2) {
    return (num1 * num2);
  };

  const divide = function(num1, num2) {
    if (num2 === 0) {
        alert('You can\'t divide by 0 silly!');
    } else {
        return (num1 / num2);
    }
  };

function operate(num1, operator, num2) {
    if (operator === '+') {
        result = add(num1, num2);
    } else if (operator === '-') {
        result = subtract(num1, num2);
    } else if (operator === '*') {
        result = multiply(num1, num2);
    } else if (operator === '/') {
        result = divide(num1, num2);
    } else {
        alert = 'Invalid operator';
    }
};

operate(num1, operator, num2);

console.log(result);