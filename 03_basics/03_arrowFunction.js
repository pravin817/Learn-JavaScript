const user = {
  username: "Pravin",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website.`);
    console.log(this);
  },
};
// user.welcomeMessage();

// user.username = "Tejas";

// user.welcomeMessage();

// console.log(this);

// function chai() {
//   let username = "Pravin";
//   console.log(this.username);
// }

// chai();

// const chai = function(){
//     const username = "Pravin";
//     console.log(this.username);
// }

const chai = () => {
  const username = "Pravin";
  console.log(this.username);
};

// chai();

// const addTwo = (num1, num2)=>{
//     return num1+num2;
// }

// const addTwo = (num1, num2)=> num1+num2;
// const addTwo = (num1, num2)=> (num1+num2);
const addTwo = (num1, num2)=> ({username : "Pravin"});


console.log(addTwo(4,5));
