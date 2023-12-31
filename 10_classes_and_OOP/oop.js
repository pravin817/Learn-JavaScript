const user = {
  username: "Pravin",
  loginCount: 8,
  signIn: true,

  getUserDetails: function () {
    // console.log("Got user details from database.")
    // console.log(`The username : ${this.username} and login count is ${this.loginCount}`);
    console.log(this);
  },
};

// console.log(user.username);
// console.log(user["username"]);
// user.getUserDetails();

// console.log(this)

// console.log(user.getUserDetails());

// Constructor function

// const promiseOne = new Promise();
// const data = new Date();

// console.log(promiseOne);
// console.log(date);

function User(username, loginCount, signIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.signIn = signIn;

  this.greeting = function () {
    console.log(`Hi ${this.username}, Welcome back!`);
  };
  // return this;
}

const user1 = new User("Pravin", 12, true);
const user2 = new User("Chai", 8, false);
console.log(user1.constructor);
// console.log(user2);

// new keyword
// 1. Creates a new empty object {} known as instance.
// 2. Sets the value of this to be the new empty object
// 3. Calls the constructor method
// 4. Returns the new object
// 5. If the constructor returns an object, that object is returned instead of the new object created in step 1
