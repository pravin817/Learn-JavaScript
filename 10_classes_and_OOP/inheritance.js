class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is : ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse(){
    console.log(`New course added by : ${this.username}`)
  }
}

const chai = new Teacher("Chai","chai@gmail.com","123345");

chai.logMe();
chai.addCourse();


const masalaChai = new User("MasalaChai");

// masalaChai.addCourse();
masalaChai.logMe();

console.log(chai == masalaChai);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);


