/*
Mine and the official solution's implementations are identical.
The important thing to remember about map() is that it returns an
array that is the same size of the array calling the method. Since
we want to return ALL the titles, we use map() to access and add the title 
property of each object to the return array.
*/
const getTheTitles = function(titles) {
    return titles.map((item) => item.title);
};

// Do not edit below this line
module.exports = getTheTitles;
