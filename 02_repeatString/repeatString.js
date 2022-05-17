const repeatString = function(string, num) {
  let repeated = ""; //Blank string to return if num == 0

  //Return ERROR if num is negative
  if(num < 0)
    return "ERROR";

  //Add string to repeated num times
  for(let i = 0;i < num;i++)
  {
      repeated += string;
  }
  return repeated; //Return string repeated num times
};

// Do not edit below this line
module.exports = repeatString;
