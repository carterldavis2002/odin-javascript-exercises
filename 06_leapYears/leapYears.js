const leapYears = function(year) {
    //Leap year if divisible by 100 and 400
    if(year % 100 === 0 && year % 400 === 0)
        return true;
    
    //Leap year if divisible by 4 and not 100
    if(year % 100 !== 0 && year % 4 === 0)
        return true;

    return false; //Not leap year otherwise
};

// Do not edit below this line
module.exports = leapYears;
