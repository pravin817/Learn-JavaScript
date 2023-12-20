const myArr = [0,1,2,3,4,5,true, "Pravin"];
const myHeros = ["Shaktiman","naagraj"];

const myArr2 = new Array("Pravin", true, 1, 2.44);

// console.log(myArr2)
// console.log(myArr2.length)

// console.log(myArr[0]);


// Methods of arrays 

// myArr.push(10);
// myArr.push(11);
// myArr.pop();


// unshift --> Add the element at the starting of the array 
myArr.unshift(30);

// shift --> Used to remove the elements from the starting of the array 

// myArr.shift();
// myArr.shift();
// myArr.shift();

// console.log(myArr.includes("Pravin"))
// console.log(myArr.indexOf(40));


// The join is used to bind the elements and converted into the string
// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr)

// console.log(myArr);

// the difference between slice and splice

console.log("A ",myArr);

const myn1 = myArr.slice(5);
console.log(myn1)
console.log("B ",myArr);


// The spice actally changes the original array while the slice take the copy of the required portion without changing the original array.


const myn2 = myArr.splice(0,5);
console.log("C ",myArr);
console.log(myn2);

