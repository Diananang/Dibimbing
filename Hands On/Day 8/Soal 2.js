const {customFilterArrayByThreshold} = require('./test');
/**
 * Rest Parameter
 * Create a function that takes a threshold and an array of numbers as arguments.
 *  * The function should return a new array containing only the numbers greater than the threshold.
 *  * The function should use the rest parameter syntax to accept the array of numbers.
 */

// const customFilterArrayByThreshold = (thresholdNumber, ...arrayNumberData) => {
//   // Condition to check if the threshold is < 0
//   if(thresholdNumber < 0 || typeof thresholdNumber !== 'number') {
//     return "Threshold must be a number greater than 0";
//   }

//   // Filter the array based on the threshold
//   return arrayNumberData.filter((number) => number > thresholdNumber);
// }

const arrayNumber = [92, 85, 70, 60, 50, 40, 30, 20, 10];
const filterredArray = customFilterArrayByThreshold(70, ...arrayNumber); // Trigger the function
console.log("*** array number: ", arrayNumber);
console.log("*** array number now: ", filterredArray);

if(true) {
  var a = 20;
}

function hello() {
  var b = 30;
}
console.log(b);

console.log(a);
