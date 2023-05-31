// Given the following collection of grades:
// Write code to filter this list down to only passing grades.
// Passing grades for this scenario can be those that are 70 or above.
const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

// rules
// Use the Array filter function (as shown previously) to print out only the passing grades.
// Start by declaring the callback function and then later refactor it to be inline and anonymous, or start with an anonymous function to begin with.

const passingGrades = grades.filter(function(grade) { // this is a anonymous function
  return grade >= 70; // this will read the array of grades then it will return all the passing grades only
});
console.log("Passing grades:", passingGrades);


// Convert the anonymous function into an arrow function in order to get some practice with them.