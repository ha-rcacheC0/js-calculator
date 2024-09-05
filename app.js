const rs = require("readline-sync");

const operationFunction = () => {
  let operation;
  do {
    operation = rs.question("Please enter a valid operation (+, -, *, /): ");
    if (
      operation !== "+" &&
      operation !== "-" &&
      operation !== "*" &&
      operation !== "/"
    ) {
      console.log("Invalid operation, please try again.");
    }
  } while (
    operation !== "+" &&
    operation !== "-" &&
    operation !== "*" &&
    operation !== "/"
  );
  return operation;
};

const numFunction = () => {
  return rs.questionInt("Please enter a number: ");
};

const calculator = () => {
  const operation = operationFunction();
  const num1 = numFunction();
  const num2 = numFunction();
  let answer;

  switch (operation) {
    case "+":
      answer = num1 + num2;
      break;
    case "-":
      answer = num1 - num2;
      break;
    case "*":
      answer = num1 * num2;
      break;
    case "/":
      answer = num1 / num2;
      break;
    default:
      console.log("Invalid operation.");
  }

  console.log(`The result is: ${answer}`);
};

calculator();
