const sumAll = function(num1, num2) {
    let sum = 0; //Total sum variable

    //ERROR if negative numbers inputted
    if(num1 < 0 || num2 < 0)
        return "ERROR";

    //ERROR if entered numbers not type number
    if(typeof num1 !== "number" || typeof num2 !== "number")
        return "ERROR";

    //Determines higher value parameter, assigning max and min accordingly.
    //If the two are equal, max is num2 and min is num1 but the result works
    //correctly i.e. is the value of the equal numbers inputted
    if(num1 > num2)
    {
        max = num1;
        min = num2;
    }
    else
    {
        max = num2;
        min = num1;
    }

    //Add numbers from min up to and including max
    for(let i = min;i <= max;i++)
        sum += i;

    return sum; //Return final result
};

// Do not edit below this line
module.exports = sumAll;
