const accountId = 1234566;
let accountEmail = "pravin@google.com"
var accountPassword = "23456"
accountCity = "Nashik"
let accountState;

// accountId = 20  // Not allowed ---> we can't change the variable which is declared as constant

console.log(accountId);

accountEmail = "Pravin@pravin.com";
accountPassword = "Password";
accountCity = "Bangaluru";

console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);
console.table([typeof accountId, typeof accountEmail, typeof accountPassword, typeof accountCity]);


/*
    Note : Prefer to not use var because of issue in block scope and functional scope.
*/