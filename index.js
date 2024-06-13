const rs = require('readline-sync');

let sym = rs.question('What operation would you like to perform? ');


 if (sym !== '+' || '-' || '/' || '*') {
  console.log('Please enter a valid character');
 } 

let num1 = rs.questionInt('Please enter your first number: ');
let num2 = rs.questionInt('Please enter your second number: ');
function cal() {
  if (sym === '+') {
    return 'The result is: ' + (num1 + num2);
  } else if (sym === '/') {
    return 'The result is: ' + num1 / num2; 
  } else if (sym === '*') {
    return 'The result is: ' + num1 * num2;
  } else if (sym === '-') {
    return 'The result is: ' + (num1 - num2);
  }
}
console.log(cal());


