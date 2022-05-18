//Fahrenheit to celsius
const ftoc = function(fahrenheit) {
  let converted = (fahrenheit - 32) * (5/9); //Conversion formula

  //Ternary used here as tests want 0 returned without decimal place (so 0 not 0.0).
  //If converted value is not zero, use toFixed to return a string with one decimal place
  //and use + in front to convert it back to a number
  return (converted === 0) ? 0 : +converted.toFixed(1);
};

//Celsius to fahrenheit, works exactly the same as ftoc, with different formula
const ctof = function(celsius) {
  let converted = (celsius * (9/5)) + 32;
  return (converted === 0) ? 0 : +converted.toFixed(1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
