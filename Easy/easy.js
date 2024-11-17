/*
A local gym wants to implement an "exercise of the day" program where there is a free class for that day that promotes a certain exercise. The gym needs some backend logic to update its system to reflect which exercise will be promoted that day. Write a function that will take as an input the name of an exercise and console log a message like Today's exercise: running
 Write one function that can dynamically print the value of the exercise for that day, and it must be closure.
// Output: Today's exercise: Running
  console.log(exercise("Running")); 
// Output: Today's exercise: Swimming
  console.log(exercise("Swimming")); 
// Output: Today's exercise: Dancing
  console.log(exercise("Dancing")); 
// Output: Today's exercise: Fencing
  console.log(exercise("Fencing")); 
*/

// exerciseoftheday is the outer functions name.
function exerciseOfTheDay() {
  // a return function is used
  return function (exercise) {
    // The return statment below returns a template literal that passess in exercise to specify the exercise of the day to the console.
    return `The exercise today is: ${exercise}`;
  };
}

// Below is the variable that stores the function exercise of the day into a exercise variable name.
const exercise = exerciseOfTheDay();

// I am console.logging the exercise function and passing in the exercise that I want displayed
console.log(exercise("running"));
console.log(exercise("Swimming"));
console.log(exercise("Dancing"));
console.log(exercise("Fencing"));
