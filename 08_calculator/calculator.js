//Adds two numbers together
const add = function(num1, num2) {
	return num1 + num2;
};

//Subtracts one number from another
const subtract = function(num1, num2) {
	return num1 - num2;
};

/*
Takes an array of numbers and returns the sum of them. If the array is empty, 0
is returned. The callback function for Array.reduce() takes parameters representing the accumulator and
the current value in the array. Here we add the current value to the total parameter. The initial value,
the second parameter of the actual reduce() call, is set to 0 so we start adding the numbers from 0. The
result returned should be a single number found from the numbers in the array representing the sum. 
*/
const sum = function(numbers) {
	return numbers.reduce((total, current) => total + current, 0);
};

/*
Multiplies an array of values together and returns the result as a single number. If the
length of the array is 0, undefined is returned. In the solution, 0 is returned instead but it
was not tested for so I had no way of knowing the behavior to implement.

Here I use 1 as the initial value for the call to reduce(). So when the first element is
the current value for the callback function, the result is that number, then the other elements
get multiplied to the accumulator, returning the correct result. The initial value parameter actually
isn't necessary in this case. Without it, the value of the first element of the array is used as the initial
value and the current parameter of the callback starts at the second element instead. This would would work
as if we had, for example [2,4], 2 is the initial value and 2 * 4 = 8. The reason give an initial value
in the sum() example is because we want to return 0 when the array is empty, which we can simply do without an outside
check like in this example to return undefined instead if the length is 0.
*/
const multiply = function(numbers) {
  if(numbers.length === 0)
    return undefined;

  return numbers.reduce((total, current) => total * current, 1);
};

//Takes a number and returns it to the power given
const power = function(number, power) {
  return number**power;
};

/*
Recursive factorial solution. It is inefficient but I wanted
to try it so I provided a more useful iterative solution below.
The factorial of 0 is 1 and that acts as the base case. Otherwise
we return the factorial of the number parameter - 1 multiplied by
the number itself.

EX: factorial(2) = factorial(1) * 2 = 1 * 2 = 2
factorial(1) = factorial(0) * 1 = 1 * 1 = 1
factorial(0) = 1
*/
const factorial = function(number) {
  if(number === 0)
    return 1;

  return factorial(number - 1) * number;
};

/* Iterative solution for factorial
  let total = 1;
  for(let i = number;i > 0;i--)
  {
    total *= i;
  }
  return total;
*/

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
