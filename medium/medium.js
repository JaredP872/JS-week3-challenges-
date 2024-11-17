/*
Write a function that will allow you to calculate how many slices of pizza x each person y would get if they shared evenly. The function should return an interpolated string like Each person gets 4.00 slices of pizza; from our 8-slice pizza x being a decimal in case there is no way to split the pizza evenly.
// Output: Each person gets 4 slices of pizza; from our 8 slice pizza
  console.log(sharePizza(8, 2)); 
// Output: Each person gets 2.67 slices of pizza; from our 8 slice pizza
  console.log(sharePizza(8, 3)); 
// Output: Each person gets 1.05 slices of pizza; from our 21 slice pizza
  console.log(sharePizza(21, 20));
// Output:Each person gets 3.33 slices of pizza; from our 10 slice pizza
  console.log(sharePizza(10, 3)); 
  */

//   the function pizza below passes two parameters slices and amount of people which are then passed into the sliceese per person variable and devided by eachother.
function Pizza(slices, amountOfPeople) {
  let slicesPerPerson = slices / amountOfPeople;
  //   The return keyword is pulling the content of the function from above and calling it back into the template literal where the values of the slices and amount of people will be stored.
  return `Each person gets ${slicesPerPerson.toFixed(
    2
  )} slices of pizza; from our ${slices} slice pizza`;
}

// The console.logs below are logging the calculatons of the possible parameters of Pizza. The numbers are operating as arguments for those parameters
console.log(Pizza(8, 2));
console.log(Pizza(8, 3));
console.log(Pizza(21, 20));
console.log(Pizza(10, 3));
