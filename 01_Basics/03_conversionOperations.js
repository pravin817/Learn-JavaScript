// Number

let score = "abc";

// console.log(typeof score);
// console.log(typeof score);

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

/*
    NOTE : 

        "33" ==> 33 (Number)
        "33abc" ==> NaN(Number (datatype))
        "abc" ===> NaN
        null ===> 0
        undefined ===> NaN
        true ==> 1 / false ===> 0
*/

// Boolean
let isLoggedIn = "Pravin";

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);

/*
    NOTE : 

    1 ===> true,  0 ===> false
    "" ==> false
    "Pravin" ==> true
*/

// String

let someNumber = 22;

let stringNumber = String(someNumber);

console.table([
  someNumber,
  typeof someNumber,
  stringNumber,
  typeof stringNumber,
]);
