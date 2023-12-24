const myNums = [1, 2, 3, 4, 5, 6];

// const myTotal = myNums.reduce((acc,curVal)=>{
//     console.log(`Acc : ${acc} , CurVal : ${curVal}`);
//     return (acc+curVal)
// },10);

// console.log(myTotal);

// const total = 0;
// const myTotal = myNums.reduce((acc, curVal) => acc + curVal, 0);
// console.log(myTotal);

const shoppingCart = [
  {
    itemName: "JS Course",
    price: 2999,
  },
  {
    itemName: "Data Science",
    price: 999,
  },
  {
    itemName: "Mobile Dev",
    price: 299,
  },
];

// Add all the values from the cart

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(`The total price is : ${priceToPay}`);
