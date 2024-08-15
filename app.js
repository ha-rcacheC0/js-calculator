const rs = require('readline-sync');

// Ask the user, "What operation would you like to perform?"
// Then the user enters one of these options: "/" "*" "-" "+"

let operation;
let breaker = false;

 do {
  operation = rs.question(`What operation would you like to perform? `);

  if (operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/') {
    console.log('This is not a valid input.');
    breaker = true;
    } else {
      breaker = false;
    }
} while (breaker);

let num1 = rs.questionInt(`Please enter your first number.`);
let num2;

do {
  num2 = rs.questionInt(`Your current operation is: ${num1} ${operation}
Please enter your second number now for the result. `);

  if (operation === '/' && num2 === 0) {
    console.log(`Error: Division by zero is not allowed. Please enter a valid number.`);
    breaker = true;
  } else {
    breaker = false;
  }
} while (breaker)

const answer = () => {
  let result = 0;

  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      console.log('Invalid operation.');   
  }

  return result;
}

console.log(`The result is: ${answer()}`);