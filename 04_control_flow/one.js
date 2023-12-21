// if

// if(true){

// }

// if(false){

// }

// const isUserLoggedIn = true;

// const temperature = 40;

// if(temperature <50){
//     console.log("Temperature less than 50")
// }else{
//     console.log("Temperature greater than 50.")
// }

// console.log("executed")

// <, >, <=, >=, ==, !=, ===,

// const score = 200;

// if(score > 100){
//     const power = "fly";
//     console.log(`User power : ${power}`);
// }
// console.log(`User power : ${power}`);

// const balance = 1000;

// if (balance > 500) console.log("Test"), console.log("hello");  // Not reccomended

// if (balance < 500) {
//   console.log("Less than 500.");
// } else if (balance < 750) {
//   console.log("Less than 750.");
// } else if (balance < 900) {
//   console.log("Less than 900.");
// } else {
//   console.log("less than 1200");
// }

const isUserLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (isUserLoggedIn && debitCard) {
  console.log("Allow to purchase the course.");
}


if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User Logged In")
}