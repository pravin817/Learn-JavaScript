// fetch('https://something.com').then().catch().finally();

// create the promise
const promiseOne = new Promise(function (resolve, rejected) {
  // Do something
  // DB Calls, Cryptography, API Calls,network calls

  setTimeout(function () {
    console.log("Async task 1 completed");
    resolve();
  }, 1000);
});

// consume the promise

promiseOne.then(function () {
  console.log("Promise one is consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2 completed");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Promise 2 is consumed");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({
      name: "chai",
      email: "Chai@example.com",
    });
  }, 1000);
});

// now use the data

promiseThree.then(function (data) {
  console.log(data);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "chai", email: "chai@example.com" });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((data) => {
    console.log(data);
    return data.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log({ message: "An error occured" });
  })
  .finally(() => {
    console.log("Finally the promise is either resolved or rejected");
  });

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "chai", password: "12345" });
    } else {
      reject("Error: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// async function getAllUser() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();

//     console.log(data);
//   } catch (error) {
//     console.log("error", error);
//   }
// }

// getAllUser();

fetch("https://api.github.com/users/pravin817")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Erorr", error);
  });
