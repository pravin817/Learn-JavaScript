// const userEmail = [];

// if (userEmail) {
//   console.log("Got the user email.");
// } else {
//   console.log("Don't have user email.");
// }

// falsy values
// false
// 0 (-0)
// null
// undefined
// 0n  --> BigInt
// ""
// NaN

// Truthy Values
// 1) true
// 2) "0"
// 3) 'false'
// 4) " "
// 5) []
// 6) {}
// 7) function(){}

// if (userEmail.length === 0) {
//   console.log("Array is empty");
// }

// const emptyObject = {};

// if (Object.keys(emptyObject).length === 0) {
//   console.log("Object is empty");
// }

// Nullish Coalsecing Operator(??): null undefind

// let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 20;
// val1 = null ?? 10 ?? 30;   // First value will be assigned.

// console.log(val1);

// ternary Operator

// (condition) ? true : false;

const iceTeaPrice = 100;

iceTeaPrice <= 80
  ? console.log("less than 80.")
  : console.log("Price greater than 80");
