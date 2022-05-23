/*
Both our implementations just return the result of a reduce()
call, using only two parameters for the callback, representing the current oldest
person and the current element being examined in the array. I use two variables to
hold the yearOfDeath/currentYear for the oldest/current person. The official solution
writes a separate function to return the age of a person given a yearOfBirth and yearOfDeath
and substitutes yearOfDeath with the current date if it does not exist. However, we both
achieve the same results in a very similar fashion.

NOTE: The parameter name of prev can be a bit confusing here. It may seem like it is referring
to the previous element in the array but is really referring to the previously oldest person
or the person we should compare against the current to see if we have a new oldest person.
*/
const findTheOldest = function(array) {
    //We use reduce() here to reduce the array of objects into a single object
    //containing information about the oldest person.
    //
    //Since we don't specify an initial value, prev will begin as the first object in
    //the array and curr will be the second
    return array.reduce((prev, curr) => {

        //Set year of current person/oldest to their death year of current year
        //if they don't have a yearOfDeath property
        let currYear, prevYear;
        if(curr.yearOfDeath === undefined)
            currYear = new Date().getFullYear();
        else
            currYear = curr.yearOfDeath;

        if(prev.yearOfDeath === undefined)
            prevYear = new Date().getFullYear();
        else
            prevYear = prev.yearOfDeath;

        //Return current person object as the oldest which will be prev
        //next if they are older than the current prev object
        if(currYear - curr.yearOfBirth > prevYear - prev.yearOfBirth)
            return curr;
        
        return prev; //Keep current oldest if curr is not older
    });
};

// Do not edit below this line
module.exports = findTheOldest;
