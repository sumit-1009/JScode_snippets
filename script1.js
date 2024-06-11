// var x = 20;
// function foo() {
//   console.log(x);
//   var x = 10;
// }
// foo();
//Output :- undefined
//Reason:- Because we are executing it before assigning the values of x

// var x = 20;
// function foo() {
//   console.log(x);
// }
// foo();
//Output :- 20

// var x = 20;
// function foo() {
//   console.log(x);
//   let x = 10;
// }
// foo();
//Output :- ReferenceError: Cannot access 'x' before initialization
//Reason:- x is declared with let x = 10;, but this line comes after the attempt to access x in console.log(x); This means x hasn't been initialized yet within the current block & var=20 is not executed since it is outside the function
////Reason:- Due to temporal deadzone

// console.log(x);
// let x = 10;
//Output :- ReferenceError: Cannot access 'x' before initialization
//Reason:- Due to temporal deadzone
//Temporal Dead Zone (TDZ) refers to a specific period within a block (delimited by curly braces {}) where a variable declared with let or const exists but cannot be accessed. This means you cannot use the variable or assign a value to it until it's officially declared within the block.
