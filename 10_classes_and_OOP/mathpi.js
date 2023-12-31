const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descriptor);

// console.log(Math.PI);

// Math.PI = 123;

// console.log(Math.PI);

const Chai = {
  name: "jinger Chai",
  price: 340,
  isAvailable: true,

  orderChai: function () {
    console.log("Chai nahi bani");
  },
};

console.log(Chai);

console.log(Object.getOwnPropertyDescriptor(Chai, "name"));

Object.defineProperty(Chai, "name", {
  writable: false,
  enumerable: false,
  configurable: false,
});

// console.log(Object.getOwnPropertyDescriptor(Chai, "name"));

for (let [key, value] of Object.entries(Chai)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
