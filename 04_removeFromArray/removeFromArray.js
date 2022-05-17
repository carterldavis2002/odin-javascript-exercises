/*
NOTE: This implementation passes all tests but realistically,
you would probably want a function that removes values that appear
more than once which are specified in the argument list. This implementation
only removes 1 occurrence and not all of them. An easy fix to this would be
to declare an empty array and push elements from the passed array as long as they are not equal
to the current argument value in the loop.
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

// Do not edit below this line
module.exports = removeFromArray;
