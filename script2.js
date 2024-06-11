// console.log("start");
// setTimeout(() =>{
//     console.log("Timeout");
// }, 0)
// console.log("end")
//output:- start end timeout
//Reason:- Due to the callback queue


// setTimeout(() => {
//   console.log("Timeout");
// }, 0);
// Promise.resolve().then(() => {
//     console.log("Promise")
// });
// console.log("end");
//output:- end promise timeout
//Reason:- Due to js priotizes microtask queue(promises, mutations) over macrotask queue(setTimeout, event handlers)

// async function foo() {
//     return "Sumit";
// }
// const result = foo();
// console.log(result);
//output:- Promise {"Sumit"}
//Reason:- aynsc function always returns promise so whatever you return in a promise function that will be wrapped in a promise.

// async function foo() {
//   return "Sumit";
// }
// const result = await foo();
// console.log(result);
//ouput:- Sumit
//Reason:- It will give only sumit and not returns promise like above as we have used await keyword in result.
//To use await just add type="module" in script tag
//<script src="script2.js" type="module"></script>