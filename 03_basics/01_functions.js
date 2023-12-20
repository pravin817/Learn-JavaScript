function sayName() {
  console.log("P");
  console.log("R");
  console.log("A");
  console.log("V");
  console.log("I");
  console.log("N");
}

// sayName();

// function addTwoNumbers(num1, num2){
//     console.log(num1+num2);
// }

function addTwoNumbers(num1, num2) {
  // const result = num1 + num2;
  // return result;

  return num1 + num2;
}

const result = addTwoNumbers(5, 2);
// console.log("Result : ",result)

function loginUserMessage(username = "user") {
//   if (!username) {
//     // dosomething
//   }

  if (username === undefined) {
    console.log("Please enter username.");
    return;
  }
  return `${username} just logged In.`;
}

console.log(loginUserMessage("Pravin"));
console.log(loginUserMessage());
