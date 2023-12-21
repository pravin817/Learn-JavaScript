// for (let i = 0; i < 10; i++) {
//   if (i == 5) {
//     console.log("5 is best number");
//   }

//   console.log(i);
// }

// console.log(i)

// for (let i = 0; i <= 10; i++) {
//   console.log(`Outer loop ${i}`);
//   for (let j = 0; j <= 10; j++) {
//     console.log(`Inner loop value : ${i} ${j}`);
//   }
// }

// const myArr = ["Flashman", "Batman", "Superman"];

// console.log(`Arrays length : ${myArr.length}`);

// for (let i = 0; i < myArr.length; i++) {
//   console.log(myArr[i]);
// }

// break and continue

// for (let i = 1; i <= 20; i++) {
//   if (i == 5) {
//     console.log("Deteched 5");
//     break;
//   }

//   console.log(`Value of i : ${i}`);
// }

for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log("Deteched 5");
    continue;
  }

  console.log(`Value of i : ${i}`);
}
