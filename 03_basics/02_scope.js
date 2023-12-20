let a = 300;

if (true) {
  let a = 10;
  //   console.log(a);
  const b = 20;
  var c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c);

// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
// }

function one() {
  const username = "Pravin";

  function two() {
    const website = "youtube";
    console.log(username);
  }

  //   console.log(website);

  //   two();
}

// one();

// if (true) {
//   const username = "Pravin";

//   if (username === "Pravin") {
//     const website = " youtube";
//     console.log(username + website);
//   }

//   console.log(website);
// }

// console.log(username);

// +++++++++++++++++++++++++++++++++++++++ Interesting +++++++++++++++++++++
console.log(addOne(2));

function addOne(num) {
  return num + 1;
}

console.log(addTwo(3));

const addTwo = function (num) {
  return num + 2;
};
