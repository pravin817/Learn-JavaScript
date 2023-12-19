//      Data types are divided into two catergories
// ------------------------------------------------
//                         |
//                         |
//         ----------------------------------
//         |                                |
//     Primitive                          Non - Primitive
//     1) Number                          1) Array
//     2) String                          2) Object
//     3) Boolean                         3) Function
//     4) BigInt
//     5) Null
//     6) undefined
//     7) Symbol

const score = 100;
const scoreValue = 100.5;

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

// how to declare the symbol

const id1 = Symbol(12345);
const id2 = Symbol(12345);

/*
    Note : Even though the id1 and id2 carries the same value, they are different because of the Symbol which is unique.
*/

console.table([id1, id2]);

// console.log(id1 == id2);
// console.log(id1 === id2);

const bigNumber = 12345654323456765432123456n;

// Arrays

const heros = ["shaktiman", "naajraj", "doga"];

// object
let myObj = {
  name: "Pravin",
  age: 22,
};

// Function
const myFunction = function () {
  console.log("Hello");
};

// myFunction();
// console.log(typeof bigNumber)

/*
    Note : to know the data type of the any variable we will use the typeof operator.

    The data typeof null is Object ----> IMP
*/

// console.log(typeof myFunction); // It will return the fuction (known as Object Function).
