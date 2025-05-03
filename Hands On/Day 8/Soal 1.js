/**
 * Variable scope
 * 
 */
let stdName = "Aldo Prasetyo";

// 1. Function and block scope
const testScope1 = (number) => {
  let stdName = "Yanto Sukma";

  if(number > 0) {
    let stdName = "Joseph";
    console.log(stdName); // Output : Joseph
  }

  console.log(stdName); // Output : Yanto Sukma
}
testScope1(1);



// 2. Test access variable outside the block scope (LET / CONST)
const testScope2 = (number) => {
  if(number > 0) {
    let stdName = "John Doe";
    let stdAge = 20;
  }

  console.log(stdName); //Output : Error
  console.log(stdAge); //Output : Error
}
testScope2(1); // Trigger the function

// 3. Test access variable outside the block scope (VAR)
const testScope3 = (number) => {
  if(number > 0) {
    var stdName = "John Doe";
    var stdAge = 20;
  }

  console.log(stdName); //Output: John Doe
  console.log(stdAge); //Output : 20
}
testScope3(1); // Trigger the function

// 4. Test access variable global scope with window object (CONST & VAR)
const numberOfStudents = 20;
var numberOfPeople = 30;
if(typeof window !== 'undefined') {
  console.log(window.numberOfStudents); //Output: error
  console.log(window.numberOfPeople); //Output: window
}