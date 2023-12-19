const name = "Pravin";
const repoCount = 50;

// console.log(name + repoCount + " value");

/*
    Note : Instead of the above method, we can use the below method, know as the string interpolation.
*/

// console.log(`Hello my name is ${name} and my repo count is : ${repoCount} `)

// Another way to declare the string

const gameName = new String("hitesh-hc-com");
// console.log(gameName);

// console.log(gameName[0]);

// console.log(gameName.__proto__);
// console.log(gameName.length)
// console.log(gameName.toLowerCase())
// console.log(gameName.toUpperCase())
// console.log(gameName.length)
// console.log(gameName.length)

// console.log(gameName.charAt(3))
// console.log(gameName.indexOf('M'))

const newString =  gameName.substring(0,3);
// console.log(newString)

const anotherString = gameName.slice(0,3);
// console.log(gameName);
// console.log(anotherString);

const newStringOne = "      hitesh.    ";

const trimString = newStringOne.trim();
// console.log(newStringOne);
// console.log(trimString);


const url = "https://www.hitesh.com/hitesh%20Choudhary";

const replaceUrl = url.replace('%20','-');
// console.log(url);
// console.log(replaceUrl);

console.log(url.includes('hitesh'));
console.log(gameName.split('-'));
