// singleton --when created by using the constructor.

// If we make with the literal then it is not a singleton

// Object Literals

// Object.create(); ---> singleton

const mySym = Symbol("key1");

const user = {
  name: "Pravin",
  "full name ": "Pravin Mhaske",
  [mySym]: "mykey1",
  age: 22,
  location: "Nashik",
  email: "Pravin@google.com",
  isLoggedIn: false,
  lastLoginDays: ["sun", "mon"],
};

// How to access the objects

// console.log(user.name);
// console.log(user["name"]);

// console.log(user["full name "]);

// console.log(user[mySym]);

/*
    Note : If we don't want to make the changes inside the objects then we can freze the object by using the 
    
    Syntax : Object.freeze(Object Name)
*/

// Object.freeze(user);

// change the values inside the object
user.email = "Pravin@chatgpt.com";

// console.log(user);

user.greeting = function(){
    console.log("Hello JS Users");
}

user.greeting2 = function(){
    console.log(`Hello Js user ${this["full name "]}`);
}

// console.log(user.greeting)
// console.log(user.greeting())

// console.log(user.greeting())
// console.log(user.greeting2())
