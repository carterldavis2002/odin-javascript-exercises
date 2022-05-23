/*
My solution is very similar to the one provided. We use all of the same
function calls, no more, no less, even though some of them are in different spots.
While I give a regex expression to replace explicity specific characters with the
blank string, the official solution provides one that replaces anything that is not
a letter, meaning numbers are not considered in their palindromes but in mine they
are. This fact is not tested for in the tests so the difference doesn't really matter.
*/
const palindromes = function (string) {
    //Remove punctuation marks from string by replacing them with blank string
    string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g,"")

    //Find the reverse of the string by splitting the characters into an array,
    //reversing the elements of that array, and joining the array elements into a string
    let charReverse = string.split("").reverse().join("");

    //Compare the reversed string to the original, ignoring case
    return string.toLowerCase() === charReverse.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
