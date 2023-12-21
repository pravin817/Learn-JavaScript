const coding = ["JS", "Ruby", "CPP", "Java", "Python"];

// coding.forEach(element => {
//     console.log(element)
// });

// coding.forEach(function (element){
//     console.log(element)
// })

// coding.forEach((val)=>{
//     console.log(val)
// })

// function printMe(val) {
//   console.log(val);
// }

// coding.forEach(printMe);

// coding.forEach((val, index, arr) => {
//   console.log(
//     `The value is : ${val} and index : ${index} and array is : ${arr}`
//   );
// });

const myCoding = [
  {
    name: "JavaScript",
    fileName: "js",
  },
  {
    name: "Java",
    fileName: "java",
  },
  {
    name: "Python",
    fileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item);
  console.log(item.name);
});
