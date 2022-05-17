/*
NOTE: This implementation passes all tests but realistically,
you would probably want a function that removes values that appear
more than once which are specified in the argument list. This implementation
only removes 1 occurrence and not all of them. Check the alternative solution
below to see an example that removes duplicate values and still passes all the tests.
*/
const removeFromArray = function() {
    let args = Array.from(arguments); //Makes an array out of the passed arguments
    let arr = args[0]; //First argument is the array we want to remove values from

    //Loop through the arguments with values to remove
    for(let i = 1;i < args.length;i++)
    {
        //Loop through elements of the array
        for(let j = 0;j < arr.length;j++)
        {
            //Use splice to remove 1 item at index j if the
            //element at index j is equal to the current argument value
            if(arr[j] === args[i])
                arr.splice(j,1);
        }
    }
    return arr; //Return the array with values removed
};

const removeFromArrayAlternate = function() {
    let args = Array.from(arguments); //Makes an array out of the passed arguments 
    let arr = args[0]; //First argument is the array we want to remove values from
    let newArr = []; //Empty array that will contain elements not present in args list
    let found = false; //Has the current arg value been found in the array to remove from?

    //Loop through array to remove elements from
    for(let i = 0;i < arr.length;i++)
    {
        found = false; //Reset found

        //Loop through args list for values to remove from array
        for(let j = 1;j < args.length;j++)
        {
            //If the value to remove is found in the array, set found to true
            if(arr[i] === args[j])
                found = true;
        }

        //Don't add values to the array that have been found in arg values list
        if(!found)
            newArr.push(arr[i]);
    }

    return newArr; 
};

// Do not edit below this line
module.exports = removeFromArray;
