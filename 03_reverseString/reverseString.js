const reverseString = function(string) {
    let reverse = ""; //String to hold resulting reversed string

    //Loop through every character in the passed string in reverse order
    for(let i = string.length - 1;i >= 0;i--)
    {
        //Add the current character to the reverse string
        reverse += string.charAt(i);
    }
    return reverse; //Return reversed result
};

// Do not edit below this line
module.exports = reverseString;
