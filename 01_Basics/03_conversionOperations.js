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

// console.log(booleanIsLoggedIn);

/*
    NOTE : 

    1 ===> true,  0 ===> false
    "" ==> false
    "Pravin" ==> true
*/

// String

let someNumber = 22;

let stringNumber = String(someNumber);

// console.table([
//   someNumber,
//   typeof someNumber,
//   stringNumber,
//   typeof stringNumber,
// ]);



// *************************************** Operations **********************************************

let value = 40
let negValue = -value;

// console.log(negValue)
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2%2);

let str1 = "Hello "
let str2 = "Pravin";
let str3 = str1 + str2;

// console.log(str3);

// console.log("1"+2);  // 12
// console.log(1+"2"); // 12
// console.log(1+2+"3");  // 33
// console.log(1+"2"+3); // 123
// console.log("1"+2+3); // 123

// console.log(2+4*5%3)

// console.log(+true);   // 1
// console.log(-true);   //-1

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);