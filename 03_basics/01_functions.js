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

// console.log(loginUserMessage("Pravin"));
// console.log(loginUserMessage());

// Rest operator
function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(10, 20, 30, 40));

const user = {
  name: "Pravin",
  price: 999,
};

function handleObject(anyObject) {
  console.log(`username is : ${anyObject.name} and price : ${anyObject.price}`);
}

// handleObject(user)
handleObject({
  name: "Ganesh",
  price: 10000,
});

const arr = [1, 2, 3, 4, 6, 9];

function returnSecondValue(getArr) {
  return getArr[1];
}

// console.log(returnSecondValue(arr));
