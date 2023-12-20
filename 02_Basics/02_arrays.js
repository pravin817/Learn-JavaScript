const marvelHeros = ["Thor", "Ironman", "Spiderman"];
const dcHeros = ["Superman", "Flash", "Batman"];

// marvelHeros.push(dcHeros);

// console.log(marvelHeros);
// console.log(marvelHeros[3]);

/*
    Note : The push perform the opertion on the existing array while concate returns the new array.
*/

// const allHeros = marvelHeros.concat(dcHeros);
// console.log(allHeros);

// Use the spread operator
// const allNewHeros = [...marvelHeros,...dcHeros];

// console.log(allNewHeros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// const realArray = another_array.flat(Infinity);
// console.log(realArray)

// console.log(Array.isArray("Pravin"));
// console.log(Array.from("Pravin"));

// Interseting
// console.log(Array.from({ name: "Pravin" }));

let score1 = 100;
let score2 = 200;
let score3 = 300;

const newArr = Array.of(score1, score2, score3);

console.log(newArr);
