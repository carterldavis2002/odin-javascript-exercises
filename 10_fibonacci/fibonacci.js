/*
Used a recursive solution, very inefficient. The iterative solution
that the official uses has the first to if statements I use to return
error on negative parameter and 0 on 0 parameter. Otherwise it uses
a for loop which I tried to implement but couldn't figure it out that starts
at 1 and executes as long as the counter is less than the parameter, incrementing
the counter by 1 every iteration. There are two variables outside the loop, one
initialized to 0 and the other 1, to represent fib(0) and fib(1). The part I didn't
figure out about the for loop was to use a temp variable to hold the value of the variable
that is initialized to 1. This variable used for the temp is then assigned to the sum of its
current value and the variable initialized to 0. The variable initialized to 0 is then assigned
whatever is in the temp to represent the preceding number to add next.
*/
const fibonacci = function(num) {
    if(num < 0) return "OOPS";
    if(num == 0) return 0;
    return (num == 1) ? 1 : fibonacci(num - 1) + fibonacci(num - 2);
};

// Do not edit below this line
module.exports = fibonacci;
