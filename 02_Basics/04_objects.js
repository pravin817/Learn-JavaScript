// const tinderUser = new Object();   // ---> Singleton object

const tinderUser = {};

tinderUser.id = "123anbc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser)

const regularUser = {
  email: "some@gmail.com",
  fullName: {
    usersFullName: {
      firstName: "Pravin",
      lastName: "Mhaske",
    },
  },
};

// console.log(regularUser)
// console.log(regularUser.fullName.usersFullName.firstName)

const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  3: "c",
  4: "d",
};

const obj4 = {
  5: "c",
  6: "d",
};

// const obj3 = {obj1, obj1};

/*
    Note : If we dont use the {} then it will store the result in obj1 which will be act as the target.
*/

// const obj3 = Object.assign({}, obj1, obj2, obj4);

// we can use the spread operator

// const obj3 = { ...obj1, ...obj2, ...obj4 };

// console.log(obj1);
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "a@gmail.com",
  },
  {
    id: 2,
    email: "a@gmail.com",
  },
  {
    id: 3,
    email: "a@gmail.com",
  },
  {
    id: 4,
    email: "a@gmail.com",
  },
  {
    id: 5,
    email: "a@gmail.com",
  },
];

console.log(users[0].id)

console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))

console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))