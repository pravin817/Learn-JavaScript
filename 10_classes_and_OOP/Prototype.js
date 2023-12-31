// let myName = "Pravin     ";

// console.log(myName.truelength);

let myHeros = ["thor", "spiderman"];
let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is : ${this.spiderman}`);
  },
};

Object.prototype.hitesh = function () {
  console.log(`Hitesh is present in all objects`);
};

Array.prototype.heyHitesh = function () {
  console.log(`Hitesh is present in all arrays`);
};

// heroPower.hitesh();

// myHeros.hitesh();

// myHeros.heyHitesh();

// heroPower.heyHitesh();

// Inheritance

const User = {
  name: "Chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssigment: "JS Assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// Modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher);

let anotherUsername = "ChaiAur Code          ";
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}

anotherUsername.trueLength();
"heist".trueLength();
"Hello   World".trueLength();